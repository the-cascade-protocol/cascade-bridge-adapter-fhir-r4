# Contributing to cascade-bridge-adapter-fhir-r4

Thank you for helping. This repository is the Cascade Bridge Adapter for FHIR R4 JSON: the package of data a Cascade
Bridge runs to turn FHIR R4 resources into Cascade records. There is no code here, only mappings, schemas, fixtures and
a manifest. [`README.md`](README.md) names the parts, and [`CLAUDE.md`](CLAUDE.md) holds the rules a change here follows;
read it before you change a mapping, a fixture or the manifest.

The contract is the [Cascade Bridge Specification](https://github.com/the-cascade-protocol/cascade-bridge-spec), and the terms the
adapter writes are [cascade-vocabulary](https://github.com/the-cascade-protocol/cascade-vocabulary)'s. Where either is silent or
wrong, the fix is a pull request there, not a copy or a new term here.

Report a security problem privately, by email to contact@cascadeprotocol.org, never in a public issue.

## Set up

You need git. Nothing is installed to work on the adapter itself.

```sh
git clone git@github.com:<you>/cascade-bridge-adapter-fhir-r4.git
cd cascade-bridge-adapter-fhir-r4
```

The checks are the specification's, and they run in CI. To run the adapter lint yourself you need Python 3.12 and a
checkout of [cascade-bridge-spec](https://github.com/the-cascade-protocol/cascade-bridge-spec);
[`adapter/validation.md`](https://github.com/the-cascade-protocol/cascade-bridge-spec/blob/main/adapter/validation.md) there gives
the command and says what it checks. Running a mapping over a fixture is a Bridge's job: the Bridges that must pass are
named in [`compatibility.json`](compatibility.json), and CI runs them. [Run a Bridge](#run-a-bridge) below does the same on
your machine.

## Run a Bridge

A Bridge converts a document, judges the fixtures and surveys a folder. [cascade-bridge-rs](https://github.com/the-cascade-protocol/cascade-bridge-rs)
is the first `compatibility.json` names, and every merge to it publishes a build as a `build-<commit>` release. Its Node
host runs the same on Linux, macOS and Windows, with no Docker and no Rust. You need Node 24 or newer and the
[GitHub CLI](https://cli.github.com/) signed in (`gh auth login`). In a POSIX shell (Git Bash on Windows), in the folder
that holds your clone:

```sh
mkdir bridge && cd bridge && git init -q
tag=$(gh release list -R the-cascade-protocol/cascade-bridge-rs -L 1 --json tagName -q '.[0].tagName')
git fetch -q --depth 1 https://github.com/the-cascade-protocol/cascade-bridge-rs "${tag#build-}"
git checkout -q FETCH_HEAD
gh release download "$tag" -R the-cascade-protocol/cascade-bridge-rs -p cascade-bridge.tgz
mkdir -p package/dist && tar -xzf cascade-bridge.tgz --strip-components=1 -C package/dist
bridge_dir=$(pwd -W 2>/dev/null || pwd)
bridge() { node "$bridge_dir/hosts/node/cascade-bridge.mjs" "$@"; }
cd ..
```

The host is read from the commit the build was made from, so the two always match. `bridge` is a shell function, so it
lasts for the shell: define it again in a new one, and repeat the steps to take a newer build. `bridge` alone prints the
usage. The release also holds
`cascade-bridge-x86_64-unknown-linux-gnu`, the executable CI runs, which takes the same arguments.

## Run the tests

`test` needs [cascade-vocabulary](https://github.com/the-cascade-protocol/cascade-vocabulary) checked out beside this
repository, at `main` unless your change waits on a pull request there:

```sh
git clone --depth 1 https://github.com/the-cascade-protocol/cascade-vocabulary.git
cd cascade-bridge-adapter-fhir-r4
bridge test . --vocabularies ../cascade-vocabulary
```

It prints a line for each case, `passed` or `failed` with what differs, and ends with a count: `257 passed`, or, as an
example of a run where cases fail, `3 failed, 254 passed`. It takes seconds, and exits 1 when a case failed.

`test` runs every case; none can be named. To read one, convert its input as its entry in
[`fixtures/manifest.ttl`](fixtures/manifest.ttl) names it (`bridge:input`, `bridge:facts`, and `bridge:envelope` from the
`#` on), and put the result beside the entry's `bridge:expectedGraph` and `bridge:expectedFindings`. An entry that is a
`bridge:IdentityRelationTest`, a pair of conversions, is not read this way.

```sh
bridge convert . fixtures/in/allergy-with-id.json --envelope '#envelope-resource' \
  --facts fixtures/facts/allergyintolerance-alg-pcn-1.ttl --vocabularies ../cascade-vocabulary \
  --out ../one.ttl --findings ../one-findings.ttl
diff ../one.ttl fixtures/expected/allergy-with-id.ttl
diff ../one-findings.ttl fixtures/findings/allergy-with-id.ttl
```

The expected files are compared as graphs, so a text diff can differ only in the order of triples and the labels of
blank nodes.

## Survey real documents

`survey` reads a folder of real documents against [`vocab/fhir-accounting.ttl`](vocab/fhir-accounting.ttl) and lists what
the documents hold that the accounting has not settled, most common first. It converts nothing and needs no vocabulary.
The specification's [`survey`](https://github.com/the-cascade-protocol/cascade-bridge-spec/blob/main/engine/command.md#survey)
section says what it reads and the columns of `--tsv`.

**Never commit real exports, and never paste their contents into an issue.** Use exports of your own, or documents you
may read.

```sh
bridge survey . ~/my-exports --tsv ../survey.tsv
```

A row of the survey is paths and counts, which can be quoted. Only the files directly in the folder are read. `--kind
<Kind>` keeps one record kind and `--under <path>` a place and the places below it. Git Bash rewrites an argument that
begins with a slash as a Windows path, so there write `MSYS_NO_PATHCONV=1 bridge survey . fixtures/in --under /reaction`
(the variable does nothing elsewhere). At the time of writing, over this repository's own `fixtures/in` it prints
something like this (counts will differ; cut):

```
Documents  239 read, 0 not read, 448 record(s)

Never decided: 7 path(s) no entry of the accounting covers
  Observation
           1         1  /k  forms /resource/contained
           1         1  /k/category  forms /resource/contained
...
No term yet: 182 path(s) whose entry says no Cascade term carries them
  AllergyIntolerance
           7         9  /category  gap fhirr4:conditionOrAllergyCategoryRepeated (carried in part)
           4         7  /reaction/severity  gap fhirr4:allergyReactionSeverityRepeated (carried in part)
...
Left out on purpose: 181 path(s) whose entry says they are not carried
  AllergyIntolerance
    because A member of a reaction of an allergy, or part of one, which no Cascade predicate carries and allergy-and-condition-findings.rq reports as fhirr4:allergyReactionMemberNotCarried at the member, where it holds something.
             3         9  /reaction/substance/coding
             3         9  /reaction/substance/coding/system
...
Not read: 0 document(s)
```

The first number of a row is how many documents hold the place, the second how many times it occurs. A file that cannot
be read is listed under `Not read` with its reason, such as `the file is empty`. What to do with a row:

- **Never decided**: no entry stands for the place. Add one to `vocab/fhir-accounting.ttl` beside its neighbours, with the
  verdict the documents call for. A place written in a Bundle entry or a contained resource is one row naming its forms:
  the [adapter guide](https://github.com/the-cascade-protocol/cascade-bridge-spec/blob/main/adapter/README.md#saying-where-a-place-stands-in-each-form-of-a-path)
  says which entry stands for which form.
- **No term yet**: the entry says no Cascade term carries the place, and names the gap. The top row of a record kind is the
  next candidate for a term. Open an issue in [cascade-vocabulary](https://github.com/the-cascade-protocol/cascade-vocabulary/issues)
  naming the gap, the place and a made-up example value, with the row.
- **Left out on purpose**: read its reason against what your documents hold. If they show the reason is wrong, say so in
  an issue here.

When the vocabulary has the term, write the mapping in `in/sparql/`, change the entry to `bridge:carried` with its
`bridge:carriedAs`, and add a test input that holds the place
([`fixtures/CLAUDE.md`](fixtures/CLAUDE.md) says how an input is added). Survey again: the place is no longer listed.

## What a pull request must pass

CI runs on every pull request. Both of these are required status checks on `main`, so do not rename a job.

- **`adapter`**: lints the package, then runs each Bridge `compatibility.json` names over it and judges the report.
- **`ready-to-merge`**: holds a pull request until every pull request it depends on can merge (see "A change that spans
  two repositories").

The workflows hold no logic of their own, by design. A check that needs writing is a change to the specification, made
there.

By hand, [`in/CLAUDE.md`](in/CLAUDE.md), [`fixtures/CLAUDE.md`](fixtures/CLAUDE.md) and
[`schema/CLAUDE.md`](schema/CLAUDE.md) each list what CI cannot run for that directory. Say in the commit which of
them you ran.

## Commits and pull requests

Use conventional commits: `feat(adapter): ...`, `docs: ...`, `fix(fixtures): ...`. A fact copied from HL7 or a sibling
repository names its source and date. Do not put a closing keyword (`closes`, `fixes`, `resolves`) before an issue the
pull request does not finish: GitHub closes it whatever the rest of the sentence says.

Every file has its origin in [`ro-crate-metadata.json`](ro-crate-metadata.json), the adapter's manifest, and a change to
a file updates its entry in the same commit. A file copied from a source also has its checksum there; a file written here
has none, because git holds its bytes.

## A change that spans two repositories

Nothing here pins another repository. A change that must land here and in another, usually the Bridge or the
specification, is a set of pull requests, each naming the others it needs in its description on a line of its own,
with the full URL:

```
Depends-On: https://github.com/the-cascade-protocol/cascade-bridge-rs/pull/123
```

The `adapter` check then runs the named pull requests together, and `ready-to-merge` holds each until the others can
merge. A pull request that names none is tried against the other repository's branch of the same name as the branch it
targets, and failing that its default branch. A change to a named pull request retests nothing: re-run the dependent
pull request's workflow with `gh run rerun`. Do the same after editing the description of your own pull request from a
fork: a fork's token is read-only, so the edit re-runs nothing.

A named pull request must be from a branch of its repository itself: one from a fork fails the check. A contributor
without write access to the other repository asks a maintainer to open the counterpart.

The full rules are in the specification's
[`compatibility.md`](https://github.com/the-cascade-protocol/cascade-bridge-spec/blob/main/compatibility.md).

## Licence

Apache-2.0 for the package. HL7's schema is CC0; each file's licence is in
[`ro-crate-metadata.json`](ro-crate-metadata.json).
