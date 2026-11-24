window.BENCHMARK_DATA = {
  "lastUpdate": 1795531420968,
  "repoUrl": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-fhir-r4",
  "entries": {
    "Bridge performance": [
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbaa314e9438da8c08e8d3bf233e25702b665f30",
          "message": "Merge pull request #75 from jayostis/feat/perf-files\n\nci(perf): a performance file for each main run",
          "timestamp": "2026-11-19T13:00:18-08:00",
          "tree_id": "3b0cd4ba83ed868e6454f3c5353f5d8f2dbd1bb0",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-fhir-r4/commit/bbaa314e9438da8c08e8d3bf233e25702b665f30"
        },
        "date": 1795122098351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 6.735016,
            "range": "6.539929-6.854611",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 6.449738,
            "range": "6.059518-6.467605",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 7.157981,
            "range": "7.157981-7.157981",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 430043136,
            "range": "376586240-434958336",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.063221,
            "range": "0.063221-0.063221",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.009596,
            "range": "0.009596-0.009596",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.019453,
            "range": "0.019453-0.019453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.010561,
            "range": "0.010561-0.010561",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.005854,
            "range": "0.005854-0.005854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.019013,
            "range": "0.019013-0.019013",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.008428,
            "range": "0.008428-0.008428",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.009222,
            "range": "0.009222-0.009222",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.064351,
            "range": "0.064351-0.064351",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.011221,
            "range": "0.011221-0.011221",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.01212,
            "range": "0.01212-0.01212",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.010704,
            "range": "0.010704-0.010704",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.008992,
            "range": "0.008992-0.008992",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.10651,
            "range": "0.10651-0.10651",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.02481,
            "range": "0.02481-0.02481",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.004129,
            "range": "0.004129-0.004129",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.113801,
            "range": "0.113801-0.113801",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.122947,
            "range": "0.122947-0.122947",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.012814,
            "range": "0.012814-0.012814",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.00928,
            "range": "0.00928-0.00928",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.011277,
            "range": "0.011277-0.011277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.010522,
            "range": "0.010522-0.010522",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.03226,
            "range": "0.03226-0.03226",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.009009,
            "range": "0.009009-0.009009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.005874,
            "range": "0.005874-0.005874",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.013184,
            "range": "0.013184-0.013184",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.009556,
            "range": "0.009556-0.009556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.008361,
            "range": "0.008361-0.008361",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.283234,
            "range": "0.283234-0.283234",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.003783,
            "range": "0.003783-0.003783",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.011942,
            "range": "0.011942-0.011942",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.008583,
            "range": "0.008583-0.008583",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.01166,
            "range": "0.01166-0.01166",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.01063,
            "range": "0.01063-0.01063",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.042219,
            "range": "0.042219-0.042219",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.013472,
            "range": "0.013472-0.013472",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.009854,
            "range": "0.009854-0.009854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.045154,
            "range": "0.045154-0.045154",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.001445,
            "range": "0.001445-0.001445",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.083409,
            "range": "0.083409-0.083409",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.010636,
            "range": "0.010636-0.010636",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.011632,
            "range": "0.011632-0.011632",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.070951,
            "range": "0.070951-0.070951",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.007333,
            "range": "0.007333-0.007333",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.011527,
            "range": "0.011527-0.011527",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.070742,
            "range": "0.070742-0.070742",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.009169,
            "range": "0.009169-0.009169",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.00771,
            "range": "0.00771-0.00771",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.057298,
            "range": "0.057298-0.057298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.010435,
            "range": "0.010435-0.010435",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.03714,
            "range": "0.03714-0.03714",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.042138,
            "range": "0.042138-0.042138",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.030179,
            "range": "0.030179-0.030179",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.013055,
            "range": "0.013055-0.013055",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.012099,
            "range": "0.012099-0.012099",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.012211,
            "range": "0.012211-0.012211",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.023815,
            "range": "0.023815-0.023815",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.012603,
            "range": "0.012603-0.012603",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.007585,
            "range": "0.007585-0.007585",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.183281,
            "range": "0.183281-0.183281",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.371018,
            "range": "0.371018-0.371018",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 1.191748,
            "range": "1.191748-1.191748",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.019195,
            "range": "0.019195-0.019195",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.009785,
            "range": "0.009785-0.009785",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.20729,
            "range": "0.20729-0.20729",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.966623,
            "range": "0.966623-0.966623",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.21634,
            "range": "0.21634-0.21634",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.683034,
            "range": "2.683034-2.683034",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.8421,
            "range": "0.8421-0.8421",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.034573,
            "range": "0.034573-0.034573",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.007692,
            "range": "0.007692-0.007692",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.017137,
            "range": "0.017137-0.017137",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.177684,
            "range": "0.177684-0.177684",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.230481,
            "range": "0.230481-0.230481",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.764549,
            "range": "0.760433-0.770263",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.011149,
            "range": "0.01002-0.012149",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.754529,
            "range": "0.749285-0.758114",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.004794,
            "range": "0.004705-0.005336",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.017453,
            "range": "0.017354-0.019744",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001366,
            "range": "0.001243-0.002231",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bbaa314e9438da8c08e8d3bf233e25702b665f30",
          "message": "Merge pull request #75 from jayostis/feat/perf-files\n\nci(perf): a performance file for each main run",
          "timestamp": "2026-11-19T21:00:18Z",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-fhir-r4/commit/bbaa314e9438da8c08e8d3bf233e25702b665f30"
        },
        "date": 1795147198735,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 9.056362,
            "range": "8.906851-9.180981",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 8.167215,
            "range": "8.095102-8.431214",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 8.692805,
            "range": "8.692805-8.692805",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 416292864,
            "range": "399855616-461193216",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.082712,
            "range": "0.082712-0.082712",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.013182,
            "range": "0.013182-0.013182",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.026468,
            "range": "0.026468-0.026468",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.014277,
            "range": "0.014277-0.014277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.007455,
            "range": "0.007455-0.007455",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.025207,
            "range": "0.025207-0.025207",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.010965,
            "range": "0.010965-0.010965",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.011905,
            "range": "0.011905-0.011905",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.077659,
            "range": "0.077659-0.077659",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.01346,
            "range": "0.01346-0.01346",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.014044,
            "range": "0.014044-0.014044",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.011549,
            "range": "0.011549-0.011549",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.010338,
            "range": "0.010338-0.010338",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.126894,
            "range": "0.126894-0.126894",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.0299,
            "range": "0.0299-0.0299",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.005198,
            "range": "0.005198-0.005198",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.138208,
            "range": "0.138208-0.138208",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.1499,
            "range": "0.1499-0.1499",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.016371,
            "range": "0.016371-0.016371",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.010677,
            "range": "0.010677-0.010677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.012988,
            "range": "0.012988-0.012988",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.011996,
            "range": "0.011996-0.011996",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.038452,
            "range": "0.038452-0.038452",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.009954,
            "range": "0.009954-0.009954",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.006388,
            "range": "0.006388-0.006388",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.015366,
            "range": "0.015366-0.015366",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.011284,
            "range": "0.011284-0.011284",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.010256,
            "range": "0.010256-0.010256",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.345624,
            "range": "0.345624-0.345624",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.00531,
            "range": "0.00531-0.00531",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.015029,
            "range": "0.015029-0.015029",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.010494,
            "range": "0.010494-0.010494",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.01451,
            "range": "0.01451-0.01451",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.012698,
            "range": "0.012698-0.012698",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.051329,
            "range": "0.051329-0.051329",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.016,
            "range": "0.016-0.016",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.011353,
            "range": "0.011353-0.011353",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.050655,
            "range": "0.050655-0.050655",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.001802,
            "range": "0.001802-0.001802",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.098139,
            "range": "0.098139-0.098139",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.011776,
            "range": "0.011776-0.011776",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.013116,
            "range": "0.013116-0.013116",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.083316,
            "range": "0.083316-0.083316",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.008533,
            "range": "0.008533-0.008533",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.01315,
            "range": "0.01315-0.01315",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.082826,
            "range": "0.082826-0.082826",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.011415,
            "range": "0.011415-0.011415",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.009332,
            "range": "0.009332-0.009332",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.068551,
            "range": "0.068551-0.068551",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.012711,
            "range": "0.012711-0.012711",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.045813,
            "range": "0.045813-0.045813",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.052486,
            "range": "0.052486-0.052486",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.033081,
            "range": "0.033081-0.033081",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.016237,
            "range": "0.016237-0.016237",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.014868,
            "range": "0.014868-0.014868",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.016399,
            "range": "0.016399-0.016399",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.024029,
            "range": "0.024029-0.024029",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.014825,
            "range": "0.014825-0.014825",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.009882,
            "range": "0.009882-0.009882",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.245205,
            "range": "0.245205-0.245205",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.482441,
            "range": "0.482441-0.482441",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 1.400225,
            "range": "1.400225-1.400225",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.020757,
            "range": "0.020757-0.020757",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.012302,
            "range": "0.012302-0.012302",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.25602,
            "range": "0.25602-0.25602",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 1.167616,
            "range": "1.167616-1.167616",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.262528,
            "range": "0.262528-0.262528",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 3.299695,
            "range": "3.299695-3.299695",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 1.005446,
            "range": "1.005446-1.005446",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.04104,
            "range": "0.04104-0.04104",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.009941,
            "range": "0.009941-0.009941",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.019161,
            "range": "0.019161-0.019161",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.205904,
            "range": "0.205904-0.205904",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.264523,
            "range": "0.264523-0.264523",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/first",
            "value": 3.121394,
            "range": "3.113115-3.242267",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle. sha256 2703dc1e7e920fa1e45d16c58f8338ef13b3cc1916ee40ffa461112d54dce5de, 1098812 bytes"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/second",
            "value": 2.736497,
            "range": "2.68402-2.769296",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/profiled",
            "value": 3.36974,
            "range": "3.36974-3.36974",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/first",
            "value": 86179840,
            "range": "69402624-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/second",
            "value": 86179840,
            "range": "69402624-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/rss",
            "value": 370225152,
            "range": "354213888-386928640",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/records",
            "value": 647,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/triples",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/findings",
            "value": 2256,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/coding-system-table.rq",
            "value": 0.02734,
            "range": "0.02734-0.02734",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-table.rq",
            "value": 0.004362,
            "range": "0.004362-0.004362",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-table.rq",
            "value": 0.005984,
            "range": "0.005984-0.005984",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-table.rq",
            "value": 0.004203,
            "range": "0.004203-0.004203",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document-table.rq",
            "value": 0.002618,
            "range": "0.002618-0.002618",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-table.rq",
            "value": 0.006289,
            "range": "0.006289-0.006289",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-table.rq",
            "value": 0.002886,
            "range": "0.002886-0.002886",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-table.rq",
            "value": 0.003063,
            "range": "0.003063-0.003063",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reasons.rq",
            "value": 0.026589,
            "range": "0.026589-0.026589",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/allergy-intolerance.rq",
            "value": 0.00556,
            "range": "0.00556-0.00556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/attachments.rq",
            "value": 0.005406,
            "range": "0.005406-0.005406",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/condition.rq",
            "value": 0.011082,
            "range": "0.011082-0.011082",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/immunization.rq",
            "value": 0.004456,
            "range": "0.004456-0.004456",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-codes.rq",
            "value": 0.025125,
            "range": "0.025125-0.025125",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-identifiers.rq",
            "value": 0.007212,
            "range": "0.007212-0.007212",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-performer.rq",
            "value": 0.001677,
            "range": "0.001677-0.001677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-quantities.rq",
            "value": 0.025701,
            "range": "0.025701-0.025701",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result.rq",
            "value": 0.032345,
            "range": "0.032345-0.032345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription.rq",
            "value": 0.00504,
            "range": "0.00504-0.00504",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense.rq",
            "value": 0.003525,
            "range": "0.003525-0.003525",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-supply-and-dosages.rq",
            "value": 0.011759,
            "range": "0.011759-0.011759",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication.rq",
            "value": 0.012031,
            "range": "0.012031-0.012031",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-text.rq",
            "value": 0.013795,
            "range": "0.013795-0.013795",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document.rq",
            "value": 0.003878,
            "range": "0.003878-0.003878",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-from-server.rq",
            "value": 0.002328,
            "range": "0.002328-0.002328",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization.rq",
            "value": 0.005023,
            "range": "0.005023-0.005023",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient.rq",
            "value": 0.003936,
            "range": "0.003936-0.003936",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/procedure.rq",
            "value": 0.007796,
            "range": "0.007796-0.007796",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/record.rq",
            "value": 0.09844,
            "range": "0.09844-0.09844",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-performer.rq",
            "value": 0.001837,
            "range": "0.001837-0.001837",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-results.rq",
            "value": 0.00469,
            "range": "0.00469-0.00469",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report.rq",
            "value": 0.003596,
            "range": "0.003596-0.003596",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation.rq",
            "value": 0.004595,
            "range": "0.004595-0.004595",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant.rq",
            "value": 0.00392,
            "range": "0.00392-0.00392",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reason-findings.rq",
            "value": 0.017194,
            "range": "0.017194-0.017194",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/category-text-findings.rq",
            "value": 0.005866,
            "range": "0.005866-0.005866",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/code-findings.rq",
            "value": 0.005091,
            "range": "0.005091-0.005091",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/date-findings.rq",
            "value": 0.021149,
            "range": "0.021149-0.021149",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-version-findings.rq",
            "value": 0.000536,
            "range": "0.000536-0.000536",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-findings.rq",
            "value": 0.027867,
            "range": "0.027867-0.027867",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-findings.rq",
            "value": 0.003889,
            "range": "0.003889-0.003889",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.004848,
            "range": "0.004848-0.004848",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-findings.rq",
            "value": 0.03831,
            "range": "0.03831-0.03831",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-findings.rq",
            "value": 0.003101,
            "range": "0.003101-0.003101",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-component-findings.rq",
            "value": 0.004462,
            "range": "0.004462-0.004462",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-findings.rq",
            "value": 0.01889,
            "range": "0.01889-0.01889",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-findings.rq",
            "value": 0.003458,
            "range": "0.003458-0.003458",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-findings.rq",
            "value": 0.00303,
            "range": "0.00303-0.00303",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-reference-findings.rq",
            "value": 0.023683,
            "range": "0.023683-0.023683",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/recorded-date-findings.rq",
            "value": 0.004595,
            "range": "0.004595-0.004595",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-display-findings.rq",
            "value": 0.013605,
            "range": "0.013605-0.013605",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-without-server-findings.rq",
            "value": 0.014284,
            "range": "0.014284-0.014284",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/repeated-id-findings.rq",
            "value": 0.008871,
            "range": "0.008871-0.008871",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-findings.rq",
            "value": 0.005153,
            "range": "0.005153-0.005153",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-result-findings.rq",
            "value": 0.004876,
            "range": "0.004876-0.004876",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/resource-type-findings.rq",
            "value": 0.004571,
            "range": "0.004571-0.004571",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-findings.rq",
            "value": 0.006557,
            "range": "0.006557-0.006557",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-findings.rq",
            "value": 0.004434,
            "range": "0.004434-0.004434",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/detect.rq",
            "value": 0.010047,
            "range": "0.010047-0.010047",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/document-table",
            "value": 0.073242,
            "range": "0.073242-0.073242",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/lift",
            "value": 0.160806,
            "range": "0.160806-0.160806",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/source-validation",
            "value": 0.52109,
            "range": "0.52109-0.52109",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/accounting",
            "value": 0.03446,
            "range": "0.03446-0.03446",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/dataset",
            "value": 0.003978,
            "range": "0.003978-0.003978",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/index",
            "value": 0.085718,
            "range": "0.085718-0.085718",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/mapping",
            "value": 0.344626,
            "range": "0.344626-0.344626",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/records",
            "value": 0.759181,
            "range": "0.759181-0.759181",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/output-validation",
            "value": 0.857261,
            "range": "0.857261-0.857261",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/findings",
            "value": 0.319676,
            "range": "0.319676-0.319676",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unresolved-addresses",
            "value": 0.01316,
            "range": "0.01316-0.01316",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/detect",
            "value": 0.010117,
            "range": "0.010117-0.010117",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/summary",
            "value": 0.006156,
            "range": "0.006156-0.006156",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/serialising",
            "value": 0.08207,
            "range": "0.08207-0.08207",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unaccounted",
            "value": 0.098199,
            "range": "0.098199-0.098199",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/graph",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7cc449ffbde5128e52fafcf8acfb64362df9b08f54ac053668923208f8175856"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/findings",
            "value": 33875,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 b652127fa85ae51be3efc3f467bdff274a9e99631bf26d3f1bccb60d4dc5eb7d"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/first",
            "value": 72.637062,
            "range": "71.126454-74.419162",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of one person, a 51 MB FHIR R4 Bundle. sha256 f20b86408066ece2d25a7b02d380b7652f22d16df9dab613a0c73c9969b17da8, 51227791 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/second",
            "value": 68.52032,
            "range": "67.906425-70.132814",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/profiled",
            "value": 72.516325,
            "range": "72.516325-72.516325",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/first",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/second",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/rss",
            "value": 3344240640,
            "range": "3341512704-3388235776",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime/records",
            "value": 16833,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of one person, a 51 MB FHIR R4 Bundle."
          },
          {
            "name": "fhir-r4-synthea-lifetime/triples",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/findings",
            "value": 267199,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/coding-system-table.rq",
            "value": 0.65948,
            "range": "0.65948-0.65948",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-table.rq",
            "value": 0.068879,
            "range": "0.068879-0.068879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-table.rq",
            "value": 0.080839,
            "range": "0.080839-0.080839",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-table.rq",
            "value": 0.101998,
            "range": "0.101998-0.101998",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document-table.rq",
            "value": 0.046923,
            "range": "0.046923-0.046923",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-table.rq",
            "value": 0.11619,
            "range": "0.11619-0.11619",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-table.rq",
            "value": 0.047393,
            "range": "0.047393-0.047393",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-table.rq",
            "value": 0.048724,
            "range": "0.048724-0.048724",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reasons.rq",
            "value": 0.573157,
            "range": "0.573157-0.573157",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/allergy-intolerance.rq",
            "value": 0.096756,
            "range": "0.096756-0.096756",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/attachments.rq",
            "value": 0.149183,
            "range": "0.149183-0.149183",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/condition.rq",
            "value": 0.104434,
            "range": "0.104434-0.104434",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/immunization.rq",
            "value": 0.0816,
            "range": "0.0816-0.0816",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-codes.rq",
            "value": 0.259767,
            "range": "0.259767-0.259767",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-identifiers.rq",
            "value": 0.109468,
            "range": "0.109468-0.109468",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-performer.rq",
            "value": 0.032955,
            "range": "0.032955-0.032955",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-quantities.rq",
            "value": 0.239329,
            "range": "0.239329-0.239329",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result.rq",
            "value": 0.308008,
            "range": "0.308008-0.308008",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription.rq",
            "value": 0.096129,
            "range": "0.096129-0.096129",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense.rq",
            "value": 0.067777,
            "range": "0.067777-0.067777",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-supply-and-dosages.rq",
            "value": 0.11125,
            "range": "0.11125-0.11125",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication.rq",
            "value": 0.16861,
            "range": "0.16861-0.16861",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-text.rq",
            "value": 0.535375,
            "range": "0.535375-0.535375",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document.rq",
            "value": 0.18808,
            "range": "0.18808-0.18808",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-from-server.rq",
            "value": 0.047405,
            "range": "0.047405-0.047405",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization.rq",
            "value": 0.102716,
            "range": "0.102716-0.102716",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient.rq",
            "value": 0.067934,
            "range": "0.067934-0.067934",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/procedure.rq",
            "value": 0.194271,
            "range": "0.194271-0.194271",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/record.rq",
            "value": 1.468977,
            "range": "1.468977-1.468977",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-performer.rq",
            "value": 0.031563,
            "range": "0.031563-0.031563",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-results.rq",
            "value": 0.24074,
            "range": "0.24074-0.24074",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report.rq",
            "value": 0.250168,
            "range": "0.250168-0.250168",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation.rq",
            "value": 0.087235,
            "range": "0.087235-0.087235",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant.rq",
            "value": 0.081269,
            "range": "0.081269-0.081269",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reason-findings.rq",
            "value": 0.286337,
            "range": "0.286337-0.286337",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/category-text-findings.rq",
            "value": 0.115651,
            "range": "0.115651-0.115651",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/code-findings.rq",
            "value": 0.133481,
            "range": "0.133481-0.133481",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/date-findings.rq",
            "value": 0.252165,
            "range": "0.252165-0.252165",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-version-findings.rq",
            "value": 0.010902,
            "range": "0.010902-0.010902",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-findings.rq",
            "value": 0.353102,
            "range": "0.353102-0.353102",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-findings.rq",
            "value": 0.07717,
            "range": "0.07717-0.07717",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.089009,
            "range": "0.089009-0.089009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-findings.rq",
            "value": 0.941297,
            "range": "0.941297-0.941297",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-findings.rq",
            "value": 0.06272,
            "range": "0.06272-0.06272",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-component-findings.rq",
            "value": 0.117408,
            "range": "0.117408-0.117408",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-findings.rq",
            "value": 0.27783,
            "range": "0.27783-0.27783",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-findings.rq",
            "value": 0.071153,
            "range": "0.071153-0.071153",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-findings.rq",
            "value": 0.06416,
            "range": "0.06416-0.06416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-reference-findings.rq",
            "value": 0.276872,
            "range": "0.276872-0.276872",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/recorded-date-findings.rq",
            "value": 0.080414,
            "range": "0.080414-0.080414",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-display-findings.rq",
            "value": 0.294978,
            "range": "0.294978-0.294978",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-without-server-findings.rq",
            "value": 0.135708,
            "range": "0.135708-0.135708",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/repeated-id-findings.rq",
            "value": 0.133167,
            "range": "0.133167-0.133167",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-findings.rq",
            "value": 0.180743,
            "range": "0.180743-0.180743",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-result-findings.rq",
            "value": 0.135436,
            "range": "0.135436-0.135436",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/resource-type-findings.rq",
            "value": 1.188278,
            "range": "1.188278-1.188278",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-findings.rq",
            "value": 0.118828,
            "range": "0.118828-0.118828",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-findings.rq",
            "value": 0.095769,
            "range": "0.095769-0.095769",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/detect.rq",
            "value": 0.009857,
            "range": "0.009857-0.009857",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/document-table",
            "value": 1.676903,
            "range": "1.676903-1.676903",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/lift",
            "value": 5.764523,
            "range": "5.764523-5.764523",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/source-validation",
            "value": 12.049987,
            "range": "12.049987-12.049987",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/accounting",
            "value": 3.27758,
            "range": "3.27758-3.27758",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/dataset",
            "value": 0.081523,
            "range": "0.081523-0.081523",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/index",
            "value": 2.802748,
            "range": "2.802748-2.802748",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/mapping",
            "value": 5.925566,
            "range": "5.925566-5.925566",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/records",
            "value": 1.039291,
            "range": "1.039291-1.039291",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/output-validation",
            "value": 18.064441,
            "range": "18.064441-18.064441",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/findings",
            "value": 6.95001,
            "range": "6.95001-6.95001",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unresolved-addresses",
            "value": 0.373334,
            "range": "0.373334-0.373334",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/detect",
            "value": 0.009966,
            "range": "0.009966-0.009966",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/summary",
            "value": 0.136672,
            "range": "0.136672-0.136672",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/serialising",
            "value": 9.183836,
            "range": "9.183836-9.183836",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unaccounted",
            "value": 5.179947,
            "range": "5.179947-5.179947",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/graph",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7a293b50f329e9697119ef46a49e0e55365198126021106ead2739fd58656a51"
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/findings",
            "value": 4050084,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4b992f4465adb297491a6571d8108f50b9d23e5375d2b20338ace4af174e227d"
          },
          {
            "name": "fhir-r4/load",
            "value": 1.038742,
            "range": "0.975495-1.221337",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.015744,
            "range": "0.012802-0.016971",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 1.023165,
            "range": "0.961286-1.20498",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.008248,
            "range": "0.007693-0.00913",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.023745,
            "range": "0.023129-0.02986",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001602,
            "range": "0.001467-0.003921",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ac2e803bf433b742e9678e18e0edf9b371c01d8",
          "message": "Merge pull request #76 from jayostis/feat/synthea-scale-sizes\n\nfeat(bench): three more lifetime Synthea records for the scale curve (about 4,000 entries, and a family pod of about 43,000)",
          "timestamp": "2026-11-20T10:38:26-08:00",
          "tree_id": "04a269368aeb432989301121986d04a42f3512c9",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-fhir-r4/commit/0ac2e803bf433b742e9678e18e0edf9b371c01d8"
        },
        "date": 1795199978424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 5.204572,
            "range": "5.074225-5.266338",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 4.886529,
            "range": "4.804685-4.950121",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 5.185251,
            "range": "5.185251-5.185251",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 392003584,
            "range": "379621376-441159680",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.047439,
            "range": "0.047439-0.047439",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.007925,
            "range": "0.007925-0.007925",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.015277,
            "range": "0.015277-0.015277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.008564,
            "range": "0.008564-0.008564",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.004317,
            "range": "0.004317-0.004317",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.015121,
            "range": "0.015121-0.015121",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.006744,
            "range": "0.006744-0.006744",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.007238,
            "range": "0.007238-0.007238",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.041579,
            "range": "0.041579-0.041579",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.005879,
            "range": "0.005879-0.005879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.007557,
            "range": "0.007557-0.007557",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.005899,
            "range": "0.005899-0.005899",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.00543,
            "range": "0.00543-0.00543",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.07426,
            "range": "0.07426-0.07426",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.016317,
            "range": "0.016317-0.016317",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.002665,
            "range": "0.002665-0.002665",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.082283,
            "range": "0.082283-0.082283",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.086357,
            "range": "0.086357-0.086357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.007864,
            "range": "0.007864-0.007864",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.005483,
            "range": "0.005483-0.005483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.006975,
            "range": "0.006975-0.006975",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.006665,
            "range": "0.006665-0.006665",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.022083,
            "range": "0.022083-0.022083",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.005462,
            "range": "0.005462-0.005462",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.003555,
            "range": "0.003555-0.003555",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.009019,
            "range": "0.009019-0.009019",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.006001,
            "range": "0.006001-0.006001",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.005186,
            "range": "0.005186-0.005186",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.209188,
            "range": "0.209188-0.209188",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.002536,
            "range": "0.002536-0.002536",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.007592,
            "range": "0.007592-0.007592",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.005659,
            "range": "0.005659-0.005659",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.007612,
            "range": "0.007612-0.007612",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.006891,
            "range": "0.006891-0.006891",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.024842,
            "range": "0.024842-0.024842",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.007668,
            "range": "0.007668-0.007668",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.005914,
            "range": "0.005914-0.005914",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.02953,
            "range": "0.02953-0.02953",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.001065,
            "range": "0.001065-0.001065",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.054215,
            "range": "0.054215-0.054215",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.005812,
            "range": "0.005812-0.005812",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.006894,
            "range": "0.006894-0.006894",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.045887,
            "range": "0.045887-0.045887",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.005149,
            "range": "0.005149-0.005149",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.007364,
            "range": "0.007364-0.007364",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.046643,
            "range": "0.046643-0.046643",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.005698,
            "range": "0.005698-0.005698",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.005042,
            "range": "0.005042-0.005042",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.037854,
            "range": "0.037854-0.037854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.006224,
            "range": "0.006224-0.006224",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.024726,
            "range": "0.024726-0.024726",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.028959,
            "range": "0.028959-0.028959",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.017627,
            "range": "0.017627-0.017627",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.008309,
            "range": "0.008309-0.008309",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.007532,
            "range": "0.007532-0.007532",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.007545,
            "range": "0.007545-0.007545",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.013631,
            "range": "0.013631-0.013631",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.008459,
            "range": "0.008459-0.008459",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.006453,
            "range": "0.006453-0.006453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.144345,
            "range": "0.144345-0.144345",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.293515,
            "range": "0.293515-0.293515",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 0.79148,
            "range": "0.79148-0.79148",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.010851,
            "range": "0.010851-0.010851",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.006857,
            "range": "0.006857-0.006857",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.1518,
            "range": "0.1518-0.1518",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.673123,
            "range": "0.673123-0.673123",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.17105,
            "range": "0.17105-0.17105",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.072203,
            "range": "2.072203-2.072203",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.561904,
            "range": "0.561904-0.561904",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.028077,
            "range": "0.028077-0.028077",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.006497,
            "range": "0.006497-0.006497",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.013938,
            "range": "0.013938-0.013938",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.10555,
            "range": "0.10555-0.10555",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.154061,
            "range": "0.154061-0.154061",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.637463,
            "range": "0.614775-0.715754",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.009505,
            "range": "0.009141-0.009739",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.627724,
            "range": "0.605269-0.706613",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.003779,
            "range": "0.003625-0.003799",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.016914,
            "range": "0.014119-0.03927",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001191,
            "range": "0.000955-0.01758",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ac2e803bf433b742e9678e18e0edf9b371c01d8",
          "message": "Merge pull request #76 from jayostis/feat/synthea-scale-sizes\n\nfeat(bench): three more lifetime Synthea records for the scale curve (about 4,000 entries, and a family pod of about 43,000)",
          "timestamp": "2026-11-20T18:38:26Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-fhir-r4/commit/0ac2e803bf433b742e9678e18e0edf9b371c01d8"
        },
        "date": 1795233900016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 4.937924,
            "range": "4.930017-5.052903",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 4.678223,
            "range": "4.560381-4.755638",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 5.075843,
            "range": "5.075843-5.075843",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 381325312,
            "range": "374173696-423645184",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.0468,
            "range": "0.0468-0.0468",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.007937,
            "range": "0.007937-0.007937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.015089,
            "range": "0.015089-0.015089",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.008647,
            "range": "0.008647-0.008647",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.004256,
            "range": "0.004256-0.004256",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.014813,
            "range": "0.014813-0.014813",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.006593,
            "range": "0.006593-0.006593",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.006962,
            "range": "0.006962-0.006962",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.040675,
            "range": "0.040675-0.040675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.005946,
            "range": "0.005946-0.005946",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.007411,
            "range": "0.007411-0.007411",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.005623,
            "range": "0.005623-0.005623",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.005438,
            "range": "0.005438-0.005438",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.073745,
            "range": "0.073745-0.073745",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.016579,
            "range": "0.016579-0.016579",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.002638,
            "range": "0.002638-0.002638",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.079966,
            "range": "0.079966-0.079966",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.084562,
            "range": "0.084562-0.084562",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.007799,
            "range": "0.007799-0.007799",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.005544,
            "range": "0.005544-0.005544",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.006995,
            "range": "0.006995-0.006995",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.00675,
            "range": "0.00675-0.00675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.022159,
            "range": "0.022159-0.022159",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.005479,
            "range": "0.005479-0.005479",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.003491,
            "range": "0.003491-0.003491",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.008737,
            "range": "0.008737-0.008737",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.005821,
            "range": "0.005821-0.005821",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.004937,
            "range": "0.004937-0.004937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.206177,
            "range": "0.206177-0.206177",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.002578,
            "range": "0.002578-0.002578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.007694,
            "range": "0.007694-0.007694",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.005684,
            "range": "0.005684-0.005684",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.007525,
            "range": "0.007525-0.007525",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.006822,
            "range": "0.006822-0.006822",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.024906,
            "range": "0.024906-0.024906",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.007707,
            "range": "0.007707-0.007707",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.005725,
            "range": "0.005725-0.005725",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.029527,
            "range": "0.029527-0.029527",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.000972,
            "range": "0.000972-0.000972",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.053182,
            "range": "0.053182-0.053182",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.00556,
            "range": "0.00556-0.00556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.006878,
            "range": "0.006878-0.006878",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.045286,
            "range": "0.045286-0.045286",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.004879,
            "range": "0.004879-0.004879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.00717,
            "range": "0.00717-0.00717",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.046116,
            "range": "0.046116-0.046116",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.005567,
            "range": "0.005567-0.005567",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.004987,
            "range": "0.004987-0.004987",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.037409,
            "range": "0.037409-0.037409",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.006209,
            "range": "0.006209-0.006209",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.02414,
            "range": "0.02414-0.02414",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.02784,
            "range": "0.02784-0.02784",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.018279,
            "range": "0.018279-0.018279",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.008473,
            "range": "0.008473-0.008473",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.007365,
            "range": "0.007365-0.007365",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.00738,
            "range": "0.00738-0.00738",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.013199,
            "range": "0.013199-0.013199",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.007613,
            "range": "0.007613-0.007613",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.007088,
            "range": "0.007088-0.007088",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.141823,
            "range": "0.141823-0.141823",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.28951,
            "range": "0.28951-0.28951",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 0.768771,
            "range": "0.768771-0.768771",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.009768,
            "range": "0.009768-0.009768",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.006523,
            "range": "0.006523-0.006523",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.151817,
            "range": "0.151817-0.151817",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.663176,
            "range": "0.663176-0.663176",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.168335,
            "range": "0.168335-0.168335",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.012281,
            "range": "2.012281-2.012281",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.555218,
            "range": "0.555218-0.555218",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.027405,
            "range": "0.027405-0.027405",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.007134,
            "range": "0.007134-0.007134",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.013575,
            "range": "0.013575-0.013575",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.105145,
            "range": "0.105145-0.105145",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.155361,
            "range": "0.155361-0.155361",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/first",
            "value": 1.73741,
            "range": "1.692426-1.829305",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle. sha256 2703dc1e7e920fa1e45d16c58f8338ef13b3cc1916ee40ffa461112d54dce5de, 1098812 bytes"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/second",
            "value": 1.479856,
            "range": "1.451653-1.618267",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/profiled",
            "value": 1.741841,
            "range": "1.741841-1.741841",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/first",
            "value": 86179840,
            "range": "69402624-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/second",
            "value": 86179840,
            "range": "86179840-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/rss",
            "value": 371499008,
            "range": "362729472-384643072",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/records",
            "value": 647,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/triples",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/findings",
            "value": 2256,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/coding-system-table.rq",
            "value": 0.015582,
            "range": "0.015582-0.015582",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-table.rq",
            "value": 0.002464,
            "range": "0.002464-0.002464",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-table.rq",
            "value": 0.003578,
            "range": "0.003578-0.003578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-table.rq",
            "value": 0.002416,
            "range": "0.002416-0.002416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document-table.rq",
            "value": 0.001295,
            "range": "0.001295-0.001295",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-table.rq",
            "value": 0.003848,
            "range": "0.003848-0.003848",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-table.rq",
            "value": 0.001743,
            "range": "0.001743-0.001743",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-table.rq",
            "value": 0.001912,
            "range": "0.001912-0.001912",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reasons.rq",
            "value": 0.012044,
            "range": "0.012044-0.012044",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/allergy-intolerance.rq",
            "value": 0.002002,
            "range": "0.002002-0.002002",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/attachments.rq",
            "value": 0.002053,
            "range": "0.002053-0.002053",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/condition.rq",
            "value": 0.0059,
            "range": "0.0059-0.0059",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/immunization.rq",
            "value": 0.001817,
            "range": "0.001817-0.001817",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-codes.rq",
            "value": 0.012018,
            "range": "0.012018-0.012018",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-identifiers.rq",
            "value": 0.003084,
            "range": "0.003084-0.003084",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-performer.rq",
            "value": 0.000635,
            "range": "0.000635-0.000635",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-quantities.rq",
            "value": 0.012518,
            "range": "0.012518-0.012518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result.rq",
            "value": 0.01538,
            "range": "0.01538-0.01538",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription.rq",
            "value": 0.002036,
            "range": "0.002036-0.002036",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense.rq",
            "value": 0.001428,
            "range": "0.001428-0.001428",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-supply-and-dosages.rq",
            "value": 0.008015,
            "range": "0.008015-0.008015",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication.rq",
            "value": 0.00638,
            "range": "0.00638-0.00638",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-text.rq",
            "value": 0.006609,
            "range": "0.006609-0.006609",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document.rq",
            "value": 0.001416,
            "range": "0.001416-0.001416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-from-server.rq",
            "value": 0.000913,
            "range": "0.000913-0.000913",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization.rq",
            "value": 0.002298,
            "range": "0.002298-0.002298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient.rq",
            "value": 0.001873,
            "range": "0.001873-0.001873",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/procedure.rq",
            "value": 0.003535,
            "range": "0.003535-0.003535",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/record.rq",
            "value": 0.050186,
            "range": "0.050186-0.050186",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-performer.rq",
            "value": 0.000737,
            "range": "0.000737-0.000737",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-results.rq",
            "value": 0.001936,
            "range": "0.001936-0.001936",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report.rq",
            "value": 0.001447,
            "range": "0.001447-0.001447",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation.rq",
            "value": 0.001805,
            "range": "0.001805-0.001805",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant.rq",
            "value": 0.001667,
            "range": "0.001667-0.001667",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reason-findings.rq",
            "value": 0.006757,
            "range": "0.006757-0.006757",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/category-text-findings.rq",
            "value": 0.002531,
            "range": "0.002531-0.002531",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/code-findings.rq",
            "value": 0.002278,
            "range": "0.002278-0.002278",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/date-findings.rq",
            "value": 0.009929,
            "range": "0.009929-0.009929",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-version-findings.rq",
            "value": 0.000276,
            "range": "0.000276-0.000276",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-findings.rq",
            "value": 0.01201,
            "range": "0.01201-0.01201",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-findings.rq",
            "value": 0.001503,
            "range": "0.001503-0.001503",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.001847,
            "range": "0.001847-0.001847",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-findings.rq",
            "value": 0.017615,
            "range": "0.017615-0.017615",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-findings.rq",
            "value": 0.001362,
            "range": "0.001362-0.001362",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-component-findings.rq",
            "value": 0.001853,
            "range": "0.001853-0.001853",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-findings.rq",
            "value": 0.008674,
            "range": "0.008674-0.008674",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-findings.rq",
            "value": 0.001357,
            "range": "0.001357-0.001357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-findings.rq",
            "value": 0.001264,
            "range": "0.001264-0.001264",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-reference-findings.rq",
            "value": 0.009395,
            "range": "0.009395-0.009395",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/recorded-date-findings.rq",
            "value": 0.00185,
            "range": "0.00185-0.00185",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-display-findings.rq",
            "value": 0.006225,
            "range": "0.006225-0.006225",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-without-server-findings.rq",
            "value": 0.006305,
            "range": "0.006305-0.006305",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/repeated-id-findings.rq",
            "value": 0.00389,
            "range": "0.00389-0.00389",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-findings.rq",
            "value": 0.002196,
            "range": "0.002196-0.002196",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-result-findings.rq",
            "value": 0.00194,
            "range": "0.00194-0.00194",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/resource-type-findings.rq",
            "value": 0.002119,
            "range": "0.002119-0.002119",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-findings.rq",
            "value": 0.002885,
            "range": "0.002885-0.002885",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-findings.rq",
            "value": 0.001861,
            "range": "0.001861-0.001861",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/detect.rq",
            "value": 0.006356,
            "range": "0.006356-0.006356",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/document-table",
            "value": 0.044042,
            "range": "0.044042-0.044042",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/lift",
            "value": 0.096862,
            "range": "0.096862-0.096862",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/source-validation",
            "value": 0.249159,
            "range": "0.249159-0.249159",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/accounting",
            "value": 0.017282,
            "range": "0.017282-0.017282",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/dataset",
            "value": 0.002004,
            "range": "0.002004-0.002004",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/index",
            "value": 0.050001,
            "range": "0.050001-0.050001",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/mapping",
            "value": 0.166056,
            "range": "0.166056-0.166056",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/records",
            "value": 0.371877,
            "range": "0.371877-0.371877",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/output-validation",
            "value": 0.48299,
            "range": "0.48299-0.48299",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/findings",
            "value": 0.147397,
            "range": "0.147397-0.147397",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unresolved-addresses",
            "value": 0.00812,
            "range": "0.00812-0.00812",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/detect",
            "value": 0.006397,
            "range": "0.006397-0.006397",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/summary",
            "value": 0.003855,
            "range": "0.003855-0.003855",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/serialising",
            "value": 0.041788,
            "range": "0.041788-0.041788",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unaccounted",
            "value": 0.05401,
            "range": "0.05401-0.05401",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/graph",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7cc449ffbde5128e52fafcf8acfb64362df9b08f54ac053668923208f8175856"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/findings",
            "value": 33875,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 b652127fa85ae51be3efc3f467bdff274a9e99631bf26d3f1bccb60d4dc5eb7d"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/first",
            "value": 41.717931,
            "range": "40.594823-44.240641",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data. sha256 f20b86408066ece2d25a7b02d380b7652f22d16df9dab613a0c73c9969b17da8, 51227791 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/second",
            "value": 40.830343,
            "range": "37.841477-41.338515",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/profiled",
            "value": 44.25166,
            "range": "44.25166-44.25166",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/first",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/second",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/rss",
            "value": 3328434176,
            "range": "3322855424-3330404352",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime/records",
            "value": 16833,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data."
          },
          {
            "name": "fhir-r4-synthea-lifetime/triples",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/findings",
            "value": 267199,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/coding-system-table.rq",
            "value": 0.39544,
            "range": "0.39544-0.39544",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-table.rq",
            "value": 0.039097,
            "range": "0.039097-0.039097",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-table.rq",
            "value": 0.045869,
            "range": "0.045869-0.045869",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-table.rq",
            "value": 0.060192,
            "range": "0.060192-0.060192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document-table.rq",
            "value": 0.026951,
            "range": "0.026951-0.026951",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-table.rq",
            "value": 0.068534,
            "range": "0.068534-0.068534",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-table.rq",
            "value": 0.028931,
            "range": "0.028931-0.028931",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-table.rq",
            "value": 0.028768,
            "range": "0.028768-0.028768",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reasons.rq",
            "value": 0.301438,
            "range": "0.301438-0.301438",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/allergy-intolerance.rq",
            "value": 0.043726,
            "range": "0.043726-0.043726",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/attachments.rq",
            "value": 0.08345,
            "range": "0.08345-0.08345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/condition.rq",
            "value": 0.058667,
            "range": "0.058667-0.058667",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/immunization.rq",
            "value": 0.04259,
            "range": "0.04259-0.04259",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-codes.rq",
            "value": 0.143476,
            "range": "0.143476-0.143476",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-identifiers.rq",
            "value": 0.053185,
            "range": "0.053185-0.053185",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-performer.rq",
            "value": 0.014597,
            "range": "0.014597-0.014597",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-quantities.rq",
            "value": 0.135026,
            "range": "0.135026-0.135026",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result.rq",
            "value": 0.169846,
            "range": "0.169846-0.169846",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription.rq",
            "value": 0.047552,
            "range": "0.047552-0.047552",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense.rq",
            "value": 0.034973,
            "range": "0.034973-0.034973",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-supply-and-dosages.rq",
            "value": 0.059761,
            "range": "0.059761-0.059761",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication.rq",
            "value": 0.104156,
            "range": "0.104156-0.104156",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-text.rq",
            "value": 0.314327,
            "range": "0.314327-0.314327",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document.rq",
            "value": 0.113153,
            "range": "0.113153-0.113153",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-from-server.rq",
            "value": 0.023048,
            "range": "0.023048-0.023048",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization.rq",
            "value": 0.056382,
            "range": "0.056382-0.056382",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient.rq",
            "value": 0.036455,
            "range": "0.036455-0.036455",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/procedure.rq",
            "value": 0.119965,
            "range": "0.119965-0.119965",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/record.rq",
            "value": 0.848495,
            "range": "0.848495-0.848495",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-performer.rq",
            "value": 0.014882,
            "range": "0.014882-0.014882",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-results.rq",
            "value": 0.137192,
            "range": "0.137192-0.137192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report.rq",
            "value": 0.157354,
            "range": "0.157354-0.157354",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation.rq",
            "value": 0.044077,
            "range": "0.044077-0.044077",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant.rq",
            "value": 0.041004,
            "range": "0.041004-0.041004",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reason-findings.rq",
            "value": 0.132675,
            "range": "0.132675-0.132675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/category-text-findings.rq",
            "value": 0.060771,
            "range": "0.060771-0.060771",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/code-findings.rq",
            "value": 0.070509,
            "range": "0.070509-0.070509",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/date-findings.rq",
            "value": 0.13285,
            "range": "0.13285-0.13285",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-version-findings.rq",
            "value": 0.006121,
            "range": "0.006121-0.006121",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-findings.rq",
            "value": 0.190416,
            "range": "0.190416-0.190416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-findings.rq",
            "value": 0.035141,
            "range": "0.035141-0.035141",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.044904,
            "range": "0.044904-0.044904",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-findings.rq",
            "value": 0.514792,
            "range": "0.514792-0.514792",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-findings.rq",
            "value": 0.034752,
            "range": "0.034752-0.034752",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-component-findings.rq",
            "value": 0.064035,
            "range": "0.064035-0.064035",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-findings.rq",
            "value": 0.1505,
            "range": "0.1505-0.1505",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-findings.rq",
            "value": 0.034328,
            "range": "0.034328-0.034328",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-findings.rq",
            "value": 0.033092,
            "range": "0.033092-0.033092",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-reference-findings.rq",
            "value": 0.143483,
            "range": "0.143483-0.143483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/recorded-date-findings.rq",
            "value": 0.040416,
            "range": "0.040416-0.040416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-display-findings.rq",
            "value": 0.165905,
            "range": "0.165905-0.165905",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-without-server-findings.rq",
            "value": 0.068354,
            "range": "0.068354-0.068354",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/repeated-id-findings.rq",
            "value": 0.074647,
            "range": "0.074647-0.074647",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-findings.rq",
            "value": 0.102045,
            "range": "0.102045-0.102045",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-result-findings.rq",
            "value": 0.0732,
            "range": "0.0732-0.0732",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/resource-type-findings.rq",
            "value": 0.89721,
            "range": "0.89721-0.89721",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-findings.rq",
            "value": 0.0622,
            "range": "0.0622-0.0622",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-findings.rq",
            "value": 0.046899,
            "range": "0.046899-0.046899",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/detect.rq",
            "value": 0.006606,
            "range": "0.006606-0.006606",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/document-table",
            "value": 1.010254,
            "range": "1.010254-1.010254",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/lift",
            "value": 3.514124,
            "range": "3.514124-3.514124",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/source-validation",
            "value": 6.837587,
            "range": "6.837587-6.837587",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/accounting",
            "value": 1.947542,
            "range": "1.947542-1.947542",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/dataset",
            "value": 0.042706,
            "range": "0.042706-0.042706",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/index",
            "value": 1.736734,
            "range": "1.736734-1.736734",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/mapping",
            "value": 3.337554,
            "range": "3.337554-3.337554",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/records",
            "value": 0.646164,
            "range": "0.646164-0.646164",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/output-validation",
            "value": 10.652234,
            "range": "10.652234-10.652234",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/findings",
            "value": 4.072558,
            "range": "4.072558-4.072558",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unresolved-addresses",
            "value": 0.212785,
            "range": "0.212785-0.212785",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/detect",
            "value": 0.006742,
            "range": "0.006742-0.006742",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/summary",
            "value": 0.111789,
            "range": "0.111789-0.111789",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/serialising",
            "value": 7.259181,
            "range": "7.259181-7.259181",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unaccounted",
            "value": 2.863707,
            "range": "2.863707-2.863707",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/graph",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7a293b50f329e9697119ef46a49e0e55365198126021106ead2739fd58656a51"
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/findings",
            "value": 4050084,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4b992f4465adb297491a6571d8108f50b9d23e5375d2b20338ace4af174e227d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/first",
            "value": 10.691844,
            "range": "10.415627-10.819419",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries. sha256 da8b599d1bafbc500fd74a1aded71f6a426dde36edc25b0fd86856595e9ad292, 14900379 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/second",
            "value": 9.625294,
            "range": "9.594616-9.84641",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/profiled",
            "value": 10.228809,
            "range": "10.228809-10.228809",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/first",
            "value": 639827968,
            "range": "589496320-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/second",
            "value": 639827968,
            "range": "589496320-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/rss",
            "value": 1026928640,
            "range": "1001906176-1062871040",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/records",
            "value": 3987,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/triples",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/findings",
            "value": 68397,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/coding-system-table.rq",
            "value": 0.12967,
            "range": "0.12967-0.12967",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-table.rq",
            "value": 0.009916,
            "range": "0.009916-0.009916",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-table.rq",
            "value": 0.010396,
            "range": "0.010396-0.010396",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-table.rq",
            "value": 0.012302,
            "range": "0.012302-0.012302",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document-table.rq",
            "value": 0.007057,
            "range": "0.007057-0.007057",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-table.rq",
            "value": 0.0165,
            "range": "0.0165-0.0165",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-table.rq",
            "value": 0.006637,
            "range": "0.006637-0.006637",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-table.rq",
            "value": 0.006577,
            "range": "0.006577-0.006577",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reasons.rq",
            "value": 0.071047,
            "range": "0.071047-0.071047",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/allergy-intolerance.rq",
            "value": 0.00949,
            "range": "0.00949-0.00949",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/attachments.rq",
            "value": 0.018896,
            "range": "0.018896-0.018896",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/condition.rq",
            "value": 0.016594,
            "range": "0.016594-0.016594",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/immunization.rq",
            "value": 0.011407,
            "range": "0.011407-0.011407",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-codes.rq",
            "value": 0.01444,
            "range": "0.01444-0.01444",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-identifiers.rq",
            "value": 0.009305,
            "range": "0.009305-0.009305",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-performer.rq",
            "value": 0.003196,
            "range": "0.003196-0.003196",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-quantities.rq",
            "value": 0.015205,
            "range": "0.015205-0.015205",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result.rq",
            "value": 0.016139,
            "range": "0.016139-0.016139",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription.rq",
            "value": 0.010981,
            "range": "0.010981-0.010981",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense.rq",
            "value": 0.007749,
            "range": "0.007749-0.007749",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-supply-and-dosages.rq",
            "value": 0.010628,
            "range": "0.010628-0.010628",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication.rq",
            "value": 0.012356,
            "range": "0.012356-0.012356",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-text.rq",
            "value": 0.068969,
            "range": "0.068969-0.068969",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document.rq",
            "value": 0.028898,
            "range": "0.028898-0.028898",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-from-server.rq",
            "value": 0.004768,
            "range": "0.004768-0.004768",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization.rq",
            "value": 0.012665,
            "range": "0.012665-0.012665",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient.rq",
            "value": 0.008435,
            "range": "0.008435-0.008435",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/procedure.rq",
            "value": 0.045579,
            "range": "0.045579-0.045579",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/record.rq",
            "value": 0.175654,
            "range": "0.175654-0.175654",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-performer.rq",
            "value": 0.003434,
            "range": "0.003434-0.003434",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-results.rq",
            "value": 0.017443,
            "range": "0.017443-0.017443",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report.rq",
            "value": 0.037444,
            "range": "0.037444-0.037444",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation.rq",
            "value": 0.009218,
            "range": "0.009218-0.009218",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant.rq",
            "value": 0.008381,
            "range": "0.008381-0.008381",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reason-findings.rq",
            "value": 0.030191,
            "range": "0.030191-0.030191",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/category-text-findings.rq",
            "value": 0.014073,
            "range": "0.014073-0.014073",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/code-findings.rq",
            "value": 0.020219,
            "range": "0.020219-0.020219",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/date-findings.rq",
            "value": 0.026932,
            "range": "0.026932-0.026932",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-version-findings.rq",
            "value": 0.001422,
            "range": "0.001422-0.001422",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-findings.rq",
            "value": 0.019041,
            "range": "0.019041-0.019041",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-findings.rq",
            "value": 0.007787,
            "range": "0.007787-0.007787",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.009949,
            "range": "0.009949-0.009949",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-findings.rq",
            "value": 0.10445,
            "range": "0.10445-0.10445",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-findings.rq",
            "value": 0.007922,
            "range": "0.007922-0.007922",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-component-findings.rq",
            "value": 0.020222,
            "range": "0.020222-0.020222",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-findings.rq",
            "value": 0.023519,
            "range": "0.023519-0.023519",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-findings.rq",
            "value": 0.007633,
            "range": "0.007633-0.007633",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-findings.rq",
            "value": 0.00732,
            "range": "0.00732-0.00732",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-reference-findings.rq",
            "value": 0.029061,
            "range": "0.029061-0.029061",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/recorded-date-findings.rq",
            "value": 0.009278,
            "range": "0.009278-0.009278",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-display-findings.rq",
            "value": 0.038288,
            "range": "0.038288-0.038288",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-without-server-findings.rq",
            "value": 0.015675,
            "range": "0.015675-0.015675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/repeated-id-findings.rq",
            "value": 0.014838,
            "range": "0.014838-0.014838",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-findings.rq",
            "value": 0.021622,
            "range": "0.021622-0.021622",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-result-findings.rq",
            "value": 0.012885,
            "range": "0.012885-0.012885",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/resource-type-findings.rq",
            "value": 0.017459,
            "range": "0.017459-0.017459",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-findings.rq",
            "value": 0.012345,
            "range": "0.012345-0.012345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-findings.rq",
            "value": 0.009466,
            "range": "0.009466-0.009466",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/detect.rq",
            "value": 0.006595,
            "range": "0.006595-0.006595",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/document-table",
            "value": 0.286633,
            "range": "0.286633-0.286633",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/lift",
            "value": 0.972708,
            "range": "0.972708-0.972708",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/source-validation",
            "value": 1.63668,
            "range": "1.63668-1.63668",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/accounting",
            "value": 0.458553,
            "range": "0.458553-0.458553",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/dataset",
            "value": 0.010167,
            "range": "0.010167-0.010167",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/index",
            "value": 0.44451,
            "range": "0.44451-0.44451",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/mapping",
            "value": 0.68043,
            "range": "0.68043-0.68043",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/records",
            "value": 0.130374,
            "range": "0.130374-0.130374",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/output-validation",
            "value": 2.455448,
            "range": "2.455448-2.455448",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/findings",
            "value": 0.694308,
            "range": "0.694308-0.694308",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unresolved-addresses",
            "value": 0.061704,
            "range": "0.061704-0.061704",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/detect",
            "value": 0.006725,
            "range": "0.006725-0.006725",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/summary",
            "value": 0.028868,
            "range": "0.028868-0.028868",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/serialising",
            "value": 1.622312,
            "range": "1.622312-1.622312",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unaccounted",
            "value": 0.73939,
            "range": "0.73939-0.73939",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/graph",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 8e086cb7aab88e92c913f3ca926a715c879be434ff2ea8f59b3d7677a6a406a2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/findings",
            "value": 1041849,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 16af8499003462b269135d82ddfce43a20a3fa92be30be18cb3b28d448bbf2b7"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/first",
            "value": 45.418571,
            "range": "43.832432-47.291627",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people. sha256 4a4a24b9c8a052cc60465fffe5da9f34ab71101f3479ebdcc794e61e6d76d7f2, 56150281 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/second",
            "value": 41.75121,
            "range": "41.525441-42.236936",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/profiled",
            "value": 46.298802,
            "range": "46.298802-46.298802",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/first",
            "value": 2552430592,
            "range": "2552430592-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/second",
            "value": 2552430592,
            "range": "2552430592-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/rss",
            "value": 3050160128,
            "range": "3013689344-3063861248",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/records",
            "value": 19728,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/triples",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/findings",
            "value": 198775,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/coding-system-table.rq",
            "value": 0.491351,
            "range": "0.491351-0.491351",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-table.rq",
            "value": 0.044105,
            "range": "0.044105-0.044105",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-table.rq",
            "value": 0.062144,
            "range": "0.062144-0.062144",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-table.rq",
            "value": 0.05389,
            "range": "0.05389-0.05389",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document-table.rq",
            "value": 0.02837,
            "range": "0.02837-0.02837",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-table.rq",
            "value": 0.079261,
            "range": "0.079261-0.079261",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-table.rq",
            "value": 0.03486,
            "range": "0.03486-0.03486",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-table.rq",
            "value": 0.035658,
            "range": "0.035658-0.035658",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reasons.rq",
            "value": 0.330661,
            "range": "0.330661-0.330661",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/allergy-intolerance.rq",
            "value": 0.045721,
            "range": "0.045721-0.045721",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/attachments.rq",
            "value": 0.073413,
            "range": "0.073413-0.073413",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/condition.rq",
            "value": 0.075666,
            "range": "0.075666-0.075666",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/immunization.rq",
            "value": 0.047116,
            "range": "0.047116-0.047116",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-codes.rq",
            "value": 0.260734,
            "range": "0.260734-0.260734",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-identifiers.rq",
            "value": 0.072663,
            "range": "0.072663-0.072663",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-performer.rq",
            "value": 0.016305,
            "range": "0.016305-0.016305",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-quantities.rq",
            "value": 0.236925,
            "range": "0.236925-0.236925",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result.rq",
            "value": 0.311842,
            "range": "0.311842-0.311842",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription.rq",
            "value": 0.054658,
            "range": "0.054658-0.054658",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense.rq",
            "value": 0.03796,
            "range": "0.03796-0.03796",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-supply-and-dosages.rq",
            "value": 0.058502,
            "range": "0.058502-0.058502",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication.rq",
            "value": 0.085453,
            "range": "0.085453-0.085453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-text.rq",
            "value": 0.251494,
            "range": "0.251494-0.251494",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document.rq",
            "value": 0.08039,
            "range": "0.08039-0.08039",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-from-server.rq",
            "value": 0.025953,
            "range": "0.025953-0.025953",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization.rq",
            "value": 0.063675,
            "range": "0.063675-0.063675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient.rq",
            "value": 0.040738,
            "range": "0.040738-0.040738",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/procedure.rq",
            "value": 0.117107,
            "range": "0.117107-0.117107",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/record.rq",
            "value": 1.259754,
            "range": "1.259754-1.259754",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-performer.rq",
            "value": 0.017762,
            "range": "0.017762-0.017762",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-results.rq",
            "value": 0.247717,
            "range": "0.247717-0.247717",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report.rq",
            "value": 0.15941,
            "range": "0.15941-0.15941",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation.rq",
            "value": 0.050773,
            "range": "0.050773-0.050773",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant.rq",
            "value": 0.046469,
            "range": "0.046469-0.046469",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reason-findings.rq",
            "value": 0.1615,
            "range": "0.1615-0.1615",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/category-text-findings.rq",
            "value": 0.063658,
            "range": "0.063658-0.063658",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/code-findings.rq",
            "value": 0.071534,
            "range": "0.071534-0.071534",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/date-findings.rq",
            "value": 0.182053,
            "range": "0.182053-0.182053",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-version-findings.rq",
            "value": 0.007107,
            "range": "0.007107-0.007107",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-findings.rq",
            "value": 0.341685,
            "range": "0.341685-0.341685",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-findings.rq",
            "value": 0.038808,
            "range": "0.038808-0.038808",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.048265,
            "range": "0.048265-0.048265",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-findings.rq",
            "value": 0.604357,
            "range": "0.604357-0.604357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-findings.rq",
            "value": 0.037348,
            "range": "0.037348-0.037348",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-component-findings.rq",
            "value": 0.131422,
            "range": "0.131422-0.131422",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-findings.rq",
            "value": 0.228144,
            "range": "0.228144-0.228144",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-findings.rq",
            "value": 0.037856,
            "range": "0.037856-0.037856",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-findings.rq",
            "value": 0.036433,
            "range": "0.036433-0.036433",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-reference-findings.rq",
            "value": 0.184529,
            "range": "0.184529-0.184529",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/recorded-date-findings.rq",
            "value": 0.045262,
            "range": "0.045262-0.045262",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-display-findings.rq",
            "value": 0.203477,
            "range": "0.203477-0.203477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-without-server-findings.rq",
            "value": 0.084791,
            "range": "0.084791-0.084791",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/repeated-id-findings.rq",
            "value": 0.107909,
            "range": "0.107909-0.107909",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-findings.rq",
            "value": 0.087958,
            "range": "0.087958-0.087958",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-result-findings.rq",
            "value": 0.106804,
            "range": "0.106804-0.106804",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/resource-type-findings.rq",
            "value": 0.079469,
            "range": "0.079469-0.079469",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-findings.rq",
            "value": 0.08647,
            "range": "0.08647-0.08647",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-findings.rq",
            "value": 0.05255,
            "range": "0.05255-0.05255",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/detect.rq",
            "value": 0.006565,
            "range": "0.006565-0.006565",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/document-table",
            "value": 1.173634,
            "range": "1.173634-1.173634",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/lift",
            "value": 4.022831,
            "range": "4.022831-4.022831",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/source-validation",
            "value": 7.760649,
            "range": "7.760649-7.760649",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/accounting",
            "value": 1.364081,
            "range": "1.364081-1.364081",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/dataset",
            "value": 0.048882,
            "range": "0.048882-0.048882",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/index",
            "value": 2.019707,
            "range": "2.019707-2.019707",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/mapping",
            "value": 4.236763,
            "range": "4.236763-4.236763",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/records",
            "value": 0.884632,
            "range": "0.884632-0.884632",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/output-validation",
            "value": 12.652424,
            "range": "12.652424-12.652424",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/findings",
            "value": 4.085127,
            "range": "4.085127-4.085127",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unresolved-addresses",
            "value": 0.214623,
            "range": "0.214623-0.214623",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/detect",
            "value": 0.006721,
            "range": "0.006721-0.006721",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/summary",
            "value": 0.115947,
            "range": "0.115947-0.115947",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/serialising",
            "value": 4.707372,
            "range": "4.707372-4.707372",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unaccounted",
            "value": 3.005408,
            "range": "3.005408-3.005408",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/graph",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 5241acfb6f7cb6de9f7a1d1e19b5c9196c248ef9cd96d821dd26d0b158ad15b4"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/findings",
            "value": 3011148,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 9de40e54a3ada526d408a98ee9cc21153fe48c9ae091f3502213adb8f892a2b2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/first",
            "value": 14.230009,
            "range": "13.888291-14.402143",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people. sha256 843940715d3b2edbdc883697a79ebf312a7754df290d28b0cd89e228549fa678, 19009113 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/second",
            "value": 13.356235,
            "range": "13.114764-13.564496",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/profiled",
            "value": 14.562677,
            "range": "14.562677-14.562677",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/first",
            "value": 723714048,
            "range": "706936832-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/second",
            "value": 723714048,
            "range": "706936832-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/rss",
            "value": 1111867392,
            "range": "1083109376-1153990656",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/records",
            "value": 6223,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/triples",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/findings",
            "value": 72909,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/coding-system-table.rq",
            "value": 0.183446,
            "range": "0.183446-0.183446",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-table.rq",
            "value": 0.016727,
            "range": "0.016727-0.016727",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-table.rq",
            "value": 0.019334,
            "range": "0.019334-0.019334",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-table.rq",
            "value": 0.018622,
            "range": "0.018622-0.018622",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document-table.rq",
            "value": 0.009587,
            "range": "0.009587-0.009587",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-table.rq",
            "value": 0.02672,
            "range": "0.02672-0.02672",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-table.rq",
            "value": 0.01123,
            "range": "0.01123-0.01123",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-table.rq",
            "value": 0.011362,
            "range": "0.011362-0.011362",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reasons.rq",
            "value": 0.102901,
            "range": "0.102901-0.102901",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/allergy-intolerance.rq",
            "value": 0.015063,
            "range": "0.015063-0.015063",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/attachments.rq",
            "value": 0.0246,
            "range": "0.0246-0.0246",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/condition.rq",
            "value": 0.027839,
            "range": "0.027839-0.027839",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/immunization.rq",
            "value": 0.017017,
            "range": "0.017017-0.017017",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-codes.rq",
            "value": 0.062489,
            "range": "0.062489-0.062489",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-identifiers.rq",
            "value": 0.020633,
            "range": "0.020633-0.020633",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-performer.rq",
            "value": 0.005208,
            "range": "0.005208-0.005208",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-quantities.rq",
            "value": 0.058807,
            "range": "0.058807-0.058807",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result.rq",
            "value": 0.075675,
            "range": "0.075675-0.075675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription.rq",
            "value": 0.017042,
            "range": "0.017042-0.017042",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense.rq",
            "value": 0.01182,
            "range": "0.01182-0.01182",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-supply-and-dosages.rq",
            "value": 0.022369,
            "range": "0.022369-0.022369",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication.rq",
            "value": 0.023514,
            "range": "0.023514-0.023514",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-text.rq",
            "value": 0.083444,
            "range": "0.083444-0.083444",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document.rq",
            "value": 0.029758,
            "range": "0.029758-0.029758",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-from-server.rq",
            "value": 0.007379,
            "range": "0.007379-0.007379",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization.rq",
            "value": 0.01935,
            "range": "0.01935-0.01935",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient.rq",
            "value": 0.012696,
            "range": "0.012696-0.012696",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/procedure.rq",
            "value": 0.038898,
            "range": "0.038898-0.038898",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/record.rq",
            "value": 0.364372,
            "range": "0.364372-0.364372",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-performer.rq",
            "value": 0.005217,
            "range": "0.005217-0.005217",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-results.rq",
            "value": 0.065537,
            "range": "0.065537-0.065537",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report.rq",
            "value": 0.050883,
            "range": "0.050883-0.050883",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation.rq",
            "value": 0.015133,
            "range": "0.015133-0.015133",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant.rq",
            "value": 0.013697,
            "range": "0.013697-0.013697",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reason-findings.rq",
            "value": 0.047197,
            "range": "0.047197-0.047197",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/category-text-findings.rq",
            "value": 0.01982,
            "range": "0.01982-0.01982",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/code-findings.rq",
            "value": 0.023677,
            "range": "0.023677-0.023677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/date-findings.rq",
            "value": 0.053808,
            "range": "0.053808-0.053808",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-version-findings.rq",
            "value": 0.002194,
            "range": "0.002194-0.002194",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-findings.rq",
            "value": 0.084053,
            "range": "0.084053-0.084053",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-findings.rq",
            "value": 0.012444,
            "range": "0.012444-0.012444",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.015703,
            "range": "0.015703-0.015703",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-findings.rq",
            "value": 0.182215,
            "range": "0.182215-0.182215",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-findings.rq",
            "value": 0.011829,
            "range": "0.011829-0.011829",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-component-findings.rq",
            "value": 0.042178,
            "range": "0.042178-0.042178",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-findings.rq",
            "value": 0.063483,
            "range": "0.063483-0.063483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-findings.rq",
            "value": 0.011894,
            "range": "0.011894-0.011894",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-findings.rq",
            "value": 0.011105,
            "range": "0.011105-0.011105",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-reference-findings.rq",
            "value": 0.056467,
            "range": "0.056467-0.056467",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/recorded-date-findings.rq",
            "value": 0.014879,
            "range": "0.014879-0.014879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-display-findings.rq",
            "value": 0.059663,
            "range": "0.059663-0.059663",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-without-server-findings.rq",
            "value": 0.025518,
            "range": "0.025518-0.025518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/repeated-id-findings.rq",
            "value": 0.029297,
            "range": "0.029297-0.029297",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-findings.rq",
            "value": 0.028802,
            "range": "0.028802-0.028802",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-result-findings.rq",
            "value": 0.030607,
            "range": "0.030607-0.030607",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/resource-type-findings.rq",
            "value": 0.023997,
            "range": "0.023997-0.023997",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-findings.rq",
            "value": 0.02477,
            "range": "0.02477-0.02477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-findings.rq",
            "value": 0.015538,
            "range": "0.015538-0.015538",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/detect.rq",
            "value": 0.006509,
            "range": "0.006509-0.006509",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/document-table",
            "value": 0.418462,
            "range": "0.418462-0.418462",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/lift",
            "value": 1.350594,
            "range": "1.350594-1.350594",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/source-validation",
            "value": 2.381448,
            "range": "2.381448-2.381448",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/accounting",
            "value": 0.48698,
            "range": "0.48698-0.48698",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/dataset",
            "value": 0.014954,
            "range": "0.014954-0.014954",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/index",
            "value": 0.641677,
            "range": "0.641677-0.641677",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/mapping",
            "value": 1.2423,
            "range": "1.2423-1.2423",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/records",
            "value": 0.242319,
            "range": "0.242319-0.242319",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/output-validation",
            "value": 3.842469,
            "range": "3.842469-3.842469",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/findings",
            "value": 1.230935,
            "range": "1.230935-1.230935",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unresolved-addresses",
            "value": 0.073394,
            "range": "0.073394-0.073394",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/detect",
            "value": 0.006604,
            "range": "0.006604-0.006604",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/summary",
            "value": 0.037354,
            "range": "0.037354-0.037354",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/serialising",
            "value": 1.662252,
            "range": "1.662252-1.662252",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unaccounted",
            "value": 0.930935,
            "range": "0.930935-0.930935",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/graph",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4a0efd931e29be8bc7f18e54577b1a79251cdec785961503cfb14c2add98830d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/findings",
            "value": 1105859,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 e2390f83b5b1732a36a59e3e296df199c0085c7e875099be9d3dc489ee652832"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.620392,
            "range": "0.585041-0.670381",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.009737,
            "range": "0.008863-0.013988",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.610678,
            "range": "0.576021-0.660829",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.003827,
            "range": "0.00366-0.004877",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.013827,
            "range": "0.013324-0.017838",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001208,
            "range": "0.001-0.002963",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15621eef1b6e4578c254871490838e45939a8487",
          "message": "Merge pull request #77 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T13:50:16-08:00",
          "tree_id": "cca51dae8561e86a721074c110a82ffe4aec570a",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-fhir-r4/commit/15621eef1b6e4578c254871490838e45939a8487"
        },
        "date": 1795297904370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 6.399473,
            "range": "6.283246-6.409673",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 6.035439,
            "range": "5.954601-6.103896",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 6.751204,
            "range": "6.751204-6.751204",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 394608640,
            "range": "349335552-417955840",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.061357,
            "range": "0.061357-0.061357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.008905,
            "range": "0.008905-0.008905",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.018202,
            "range": "0.018202-0.018202",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.009492,
            "range": "0.009492-0.009492",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.004861,
            "range": "0.004861-0.004861",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.016978,
            "range": "0.016978-0.016978",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.006937,
            "range": "0.006937-0.006937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.007455,
            "range": "0.007455-0.007455",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.064461,
            "range": "0.064461-0.064461",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.009048,
            "range": "0.009048-0.009048",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.010947,
            "range": "0.010947-0.010947",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.009041,
            "range": "0.009041-0.009041",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.008712,
            "range": "0.008712-0.008712",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.101675,
            "range": "0.101675-0.101675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.022276,
            "range": "0.022276-0.022276",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.003805,
            "range": "0.003805-0.003805",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.117604,
            "range": "0.117604-0.117604",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.119067,
            "range": "0.119067-0.119067",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.011433,
            "range": "0.011433-0.011433",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.007499,
            "range": "0.007499-0.007499",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.009669,
            "range": "0.009669-0.009669",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.008984,
            "range": "0.008984-0.008984",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.029991,
            "range": "0.029991-0.029991",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.008209,
            "range": "0.008209-0.008209",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.005084,
            "range": "0.005084-0.005084",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.011986,
            "range": "0.011986-0.011986",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.008148,
            "range": "0.008148-0.008148",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.007274,
            "range": "0.007274-0.007274",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.273463,
            "range": "0.273463-0.273463",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.003656,
            "range": "0.003656-0.003656",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.010204,
            "range": "0.010204-0.010204",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.007877,
            "range": "0.007877-0.007877",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.0104,
            "range": "0.0104-0.0104",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.008997,
            "range": "0.008997-0.008997",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.038178,
            "range": "0.038178-0.038178",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.01181,
            "range": "0.01181-0.01181",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.008502,
            "range": "0.008502-0.008502",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.041002,
            "range": "0.041002-0.041002",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.001489,
            "range": "0.001489-0.001489",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.079154,
            "range": "0.079154-0.079154",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.008387,
            "range": "0.008387-0.008387",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.009986,
            "range": "0.009986-0.009986",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.064804,
            "range": "0.064804-0.064804",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.007152,
            "range": "0.007152-0.007152",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.009948,
            "range": "0.009948-0.009948",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.062831,
            "range": "0.062831-0.062831",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.008348,
            "range": "0.008348-0.008348",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.006962,
            "range": "0.006962-0.006962",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.057021,
            "range": "0.057021-0.057021",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.008756,
            "range": "0.008756-0.008756",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.032243,
            "range": "0.032243-0.032243",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.037726,
            "range": "0.037726-0.037726",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.025345,
            "range": "0.025345-0.025345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.011608,
            "range": "0.011608-0.011608",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.010082,
            "range": "0.010082-0.010082",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.009961,
            "range": "0.009961-0.009961",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.017364,
            "range": "0.017364-0.017364",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.01182,
            "range": "0.01182-0.01182",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.007121,
            "range": "0.007121-0.007121",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.173304,
            "range": "0.173304-0.173304",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.355599,
            "range": "0.355599-0.355599",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 0.955745,
            "range": "0.955745-0.955745",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.017509,
            "range": "0.017509-0.017509",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.010278,
            "range": "0.010278-0.010278",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.198513,
            "range": "0.198513-0.198513",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.921015,
            "range": "0.921015-0.921015",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.226576,
            "range": "0.226576-0.226576",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.748478,
            "range": "2.748478-2.748478",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.793016,
            "range": "0.793016-0.793016",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.036342,
            "range": "0.036342-0.036342",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.007246,
            "range": "0.007246-0.007246",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.014263,
            "range": "0.014263-0.014263",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.128987,
            "range": "0.128987-0.128987",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.164331,
            "range": "0.164331-0.164331",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.708435,
            "range": "0.690466-0.708728",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.011092,
            "range": "0.010337-0.011993",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.696442,
            "range": "0.679374-0.698391",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.003666,
            "range": "0.003561-0.003869",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.016935,
            "range": "0.0169-0.024756",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001494,
            "range": "0.001243-0.005287",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "15621eef1b6e4578c254871490838e45939a8487",
          "message": "Merge pull request #77 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T21:50:16Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-fhir-r4/commit/15621eef1b6e4578c254871490838e45939a8487"
        },
        "date": 1795350144682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 7.051176,
            "range": "6.893122-7.150503",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 6.485814,
            "range": "6.301821-6.907771",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 6.704183,
            "range": "6.704183-6.704183",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 399319040,
            "range": "376918016-460341248",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.064195,
            "range": "0.064195-0.064195",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.01015,
            "range": "0.01015-0.01015",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.020485,
            "range": "0.020485-0.020485",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.010663,
            "range": "0.010663-0.010663",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.00556,
            "range": "0.00556-0.00556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.019372,
            "range": "0.019372-0.019372",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.008676,
            "range": "0.008676-0.008676",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.00913,
            "range": "0.00913-0.00913",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.057978,
            "range": "0.057978-0.057978",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.008957,
            "range": "0.008957-0.008957",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.010642,
            "range": "0.010642-0.010642",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.00867,
            "range": "0.00867-0.00867",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.008196,
            "range": "0.008196-0.008196",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.098106,
            "range": "0.098106-0.098106",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.022636,
            "range": "0.022636-0.022636",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.003948,
            "range": "0.003948-0.003948",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.110286,
            "range": "0.110286-0.110286",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.112591,
            "range": "0.112591-0.112591",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.011378,
            "range": "0.011378-0.011378",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.007906,
            "range": "0.007906-0.007906",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.009618,
            "range": "0.009618-0.009618",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.009301,
            "range": "0.009301-0.009301",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.03075,
            "range": "0.03075-0.03075",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.007822,
            "range": "0.007822-0.007822",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.005048,
            "range": "0.005048-0.005048",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.012031,
            "range": "0.012031-0.012031",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.008365,
            "range": "0.008365-0.008365",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.007513,
            "range": "0.007513-0.007513",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.277437,
            "range": "0.277437-0.277437",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.003644,
            "range": "0.003644-0.003644",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.010891,
            "range": "0.010891-0.010891",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.007915,
            "range": "0.007915-0.007915",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.010571,
            "range": "0.010571-0.010571",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.009308,
            "range": "0.009308-0.009308",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.040111,
            "range": "0.040111-0.040111",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.012118,
            "range": "0.012118-0.012118",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.00852,
            "range": "0.00852-0.00852",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.039023,
            "range": "0.039023-0.039023",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.00132,
            "range": "0.00132-0.00132",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.079315,
            "range": "0.079315-0.079315",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.009122,
            "range": "0.009122-0.009122",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.010002,
            "range": "0.010002-0.010002",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.063084,
            "range": "0.063084-0.063084",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.006683,
            "range": "0.006683-0.006683",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.010081,
            "range": "0.010081-0.010081",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.064533,
            "range": "0.064533-0.064533",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.008328,
            "range": "0.008328-0.008328",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.006929,
            "range": "0.006929-0.006929",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.056385,
            "range": "0.056385-0.056385",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.008784,
            "range": "0.008784-0.008784",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.034729,
            "range": "0.034729-0.034729",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.04168,
            "range": "0.04168-0.04168",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.024226,
            "range": "0.024226-0.024226",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.011408,
            "range": "0.011408-0.011408",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.010622,
            "range": "0.010622-0.010622",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.011164,
            "range": "0.011164-0.011164",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.018608,
            "range": "0.018608-0.018608",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.01198,
            "range": "0.01198-0.01198",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.007486,
            "range": "0.007486-0.007486",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.188475,
            "range": "0.188475-0.188475",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.373839,
            "range": "0.373839-0.373839",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 1.032169,
            "range": "1.032169-1.032169",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.015292,
            "range": "0.015292-0.015292",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.009467,
            "range": "0.009467-0.009467",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.206719,
            "range": "0.206719-0.206719",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.90462,
            "range": "0.90462-0.90462",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.211655,
            "range": "0.211655-0.211655",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.541466,
            "range": "2.541466-2.541466",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.777215,
            "range": "0.777215-0.777215",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.034114,
            "range": "0.034114-0.034114",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.007576,
            "range": "0.007576-0.007576",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.016557,
            "range": "0.016557-0.016557",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.160471,
            "range": "0.160471-0.160471",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.224549,
            "range": "0.224549-0.224549",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/first",
            "value": 2.533631,
            "range": "2.449373-2.589349",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle. sha256 2703dc1e7e920fa1e45d16c58f8338ef13b3cc1916ee40ffa461112d54dce5de, 1098812 bytes"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/second",
            "value": 2.270739,
            "range": "2.218042-2.272461",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/profiled",
            "value": 2.602331,
            "range": "2.602331-2.602331",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/first",
            "value": 86179840,
            "range": "86179840-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/second",
            "value": 86179840,
            "range": "86179840-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/rss",
            "value": 372592640,
            "range": "365973504-379023360",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/records",
            "value": 647,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/triples",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/findings",
            "value": 2256,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/coding-system-table.rq",
            "value": 0.024331,
            "range": "0.024331-0.024331",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-table.rq",
            "value": 0.003156,
            "range": "0.003156-0.003156",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-table.rq",
            "value": 0.004796,
            "range": "0.004796-0.004796",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-table.rq",
            "value": 0.003193,
            "range": "0.003193-0.003193",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document-table.rq",
            "value": 0.001672,
            "range": "0.001672-0.001672",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-table.rq",
            "value": 0.00487,
            "range": "0.00487-0.00487",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-table.rq",
            "value": 0.002298,
            "range": "0.002298-0.002298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-table.rq",
            "value": 0.002378,
            "range": "0.002378-0.002378",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reasons.rq",
            "value": 0.019666,
            "range": "0.019666-0.019666",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/allergy-intolerance.rq",
            "value": 0.003896,
            "range": "0.003896-0.003896",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/attachments.rq",
            "value": 0.004128,
            "range": "0.004128-0.004128",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/condition.rq",
            "value": 0.008768,
            "range": "0.008768-0.008768",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/immunization.rq",
            "value": 0.003641,
            "range": "0.003641-0.003641",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-codes.rq",
            "value": 0.020892,
            "range": "0.020892-0.020892",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-identifiers.rq",
            "value": 0.005435,
            "range": "0.005435-0.005435",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-performer.rq",
            "value": 0.001293,
            "range": "0.001293-0.001293",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-quantities.rq",
            "value": 0.021009,
            "range": "0.021009-0.021009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result.rq",
            "value": 0.024938,
            "range": "0.024938-0.024938",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription.rq",
            "value": 0.00387,
            "range": "0.00387-0.00387",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense.rq",
            "value": 0.002809,
            "range": "0.002809-0.002809",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-supply-and-dosages.rq",
            "value": 0.008755,
            "range": "0.008755-0.008755",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication.rq",
            "value": 0.009522,
            "range": "0.009522-0.009522",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-text.rq",
            "value": 0.010247,
            "range": "0.010247-0.010247",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document.rq",
            "value": 0.002957,
            "range": "0.002957-0.002957",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-from-server.rq",
            "value": 0.001746,
            "range": "0.001746-0.001746",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization.rq",
            "value": 0.003334,
            "range": "0.003334-0.003334",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient.rq",
            "value": 0.00267,
            "range": "0.00267-0.00267",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/procedure.rq",
            "value": 0.00547,
            "range": "0.00547-0.00547",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/record.rq",
            "value": 0.072147,
            "range": "0.072147-0.072147",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-performer.rq",
            "value": 0.00127,
            "range": "0.00127-0.00127",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-results.rq",
            "value": 0.003607,
            "range": "0.003607-0.003607",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report.rq",
            "value": 0.002827,
            "range": "0.002827-0.002827",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation.rq",
            "value": 0.003179,
            "range": "0.003179-0.003179",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant.rq",
            "value": 0.003204,
            "range": "0.003204-0.003204",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reason-findings.rq",
            "value": 0.011908,
            "range": "0.011908-0.011908",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/category-text-findings.rq",
            "value": 0.004513,
            "range": "0.004513-0.004513",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/code-findings.rq",
            "value": 0.003779,
            "range": "0.003779-0.003779",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/date-findings.rq",
            "value": 0.016219,
            "range": "0.016219-0.016219",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-version-findings.rq",
            "value": 0.000524,
            "range": "0.000524-0.000524",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-findings.rq",
            "value": 0.022098,
            "range": "0.022098-0.022098",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-findings.rq",
            "value": 0.002556,
            "range": "0.002556-0.002556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.003439,
            "range": "0.003439-0.003439",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-findings.rq",
            "value": 0.027844,
            "range": "0.027844-0.027844",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-findings.rq",
            "value": 0.002401,
            "range": "0.002401-0.002401",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-component-findings.rq",
            "value": 0.003271,
            "range": "0.003271-0.003271",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-findings.rq",
            "value": 0.01324,
            "range": "0.01324-0.01324",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-findings.rq",
            "value": 0.002454,
            "range": "0.002454-0.002454",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-findings.rq",
            "value": 0.002118,
            "range": "0.002118-0.002118",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-reference-findings.rq",
            "value": 0.017569,
            "range": "0.017569-0.017569",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/recorded-date-findings.rq",
            "value": 0.003416,
            "range": "0.003416-0.003416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-display-findings.rq",
            "value": 0.010298,
            "range": "0.010298-0.010298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-without-server-findings.rq",
            "value": 0.010883,
            "range": "0.010883-0.010883",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/repeated-id-findings.rq",
            "value": 0.006038,
            "range": "0.006038-0.006038",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-findings.rq",
            "value": 0.003429,
            "range": "0.003429-0.003429",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-result-findings.rq",
            "value": 0.004136,
            "range": "0.004136-0.004136",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/resource-type-findings.rq",
            "value": 0.004034,
            "range": "0.004034-0.004034",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-findings.rq",
            "value": 0.00505,
            "range": "0.00505-0.00505",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-findings.rq",
            "value": 0.003574,
            "range": "0.003574-0.003574",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/detect.rq",
            "value": 0.0076,
            "range": "0.0076-0.0076",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/document-table",
            "value": 0.060573,
            "range": "0.060573-0.060573",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/lift",
            "value": 0.121526,
            "range": "0.121526-0.121526",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/source-validation",
            "value": 0.409573,
            "range": "0.409573-0.409573",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/accounting",
            "value": 0.025927,
            "range": "0.025927-0.025927",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/dataset",
            "value": 0.002673,
            "range": "0.002673-0.002673",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/index",
            "value": 0.062937,
            "range": "0.062937-0.062937",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/mapping",
            "value": 0.261175,
            "range": "0.261175-0.261175",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/records",
            "value": 0.605135,
            "range": "0.605135-0.605135",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/output-validation",
            "value": 0.64664,
            "range": "0.64664-0.64664",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/findings",
            "value": 0.236861,
            "range": "0.236861-0.236861",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unresolved-addresses",
            "value": 0.010017,
            "range": "0.010017-0.010017",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/detect",
            "value": 0.007659,
            "range": "0.007659-0.007659",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/summary",
            "value": 0.004932,
            "range": "0.004932-0.004932",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/serialising",
            "value": 0.069637,
            "range": "0.069637-0.069637",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unaccounted",
            "value": 0.077065,
            "range": "0.077065-0.077065",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/graph",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7cc449ffbde5128e52fafcf8acfb64362df9b08f54ac053668923208f8175856"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/findings",
            "value": 33875,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 b652127fa85ae51be3efc3f467bdff274a9e99631bf26d3f1bccb60d4dc5eb7d"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/first",
            "value": 54.989689,
            "range": "54.414463-56.309691",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data. sha256 f20b86408066ece2d25a7b02d380b7652f22d16df9dab613a0c73c9969b17da8, 51227791 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/second",
            "value": 52.763886,
            "range": "50.099189-53.234905",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/profiled",
            "value": 55.828311,
            "range": "55.828311-55.828311",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/first",
            "value": 2518876160,
            "range": "2200109056-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/second",
            "value": 2518876160,
            "range": "2200109056-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/rss",
            "value": 3342249984,
            "range": "3016200192-3360096256",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime/records",
            "value": 16833,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data."
          },
          {
            "name": "fhir-r4-synthea-lifetime/triples",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/findings",
            "value": 267199,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/coding-system-table.rq",
            "value": 0.518104,
            "range": "0.518104-0.518104",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-table.rq",
            "value": 0.052332,
            "range": "0.052332-0.052332",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-table.rq",
            "value": 0.061223,
            "range": "0.061223-0.061223",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-table.rq",
            "value": 0.077399,
            "range": "0.077399-0.077399",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document-table.rq",
            "value": 0.035765,
            "range": "0.035765-0.035765",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-table.rq",
            "value": 0.088742,
            "range": "0.088742-0.088742",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-table.rq",
            "value": 0.038067,
            "range": "0.038067-0.038067",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-table.rq",
            "value": 0.037239,
            "range": "0.037239-0.037239",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reasons.rq",
            "value": 0.415418,
            "range": "0.415418-0.415418",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/allergy-intolerance.rq",
            "value": 0.060107,
            "range": "0.060107-0.060107",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/attachments.rq",
            "value": 0.107337,
            "range": "0.107337-0.107337",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/condition.rq",
            "value": 0.076147,
            "range": "0.076147-0.076147",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/immunization.rq",
            "value": 0.061229,
            "range": "0.061229-0.061229",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-codes.rq",
            "value": 0.181834,
            "range": "0.181834-0.181834",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-identifiers.rq",
            "value": 0.072567,
            "range": "0.072567-0.072567",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-performer.rq",
            "value": 0.0205,
            "range": "0.0205-0.0205",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-quantities.rq",
            "value": 0.173787,
            "range": "0.173787-0.173787",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result.rq",
            "value": 0.220039,
            "range": "0.220039-0.220039",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription.rq",
            "value": 0.064736,
            "range": "0.064736-0.064736",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense.rq",
            "value": 0.045006,
            "range": "0.045006-0.045006",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-supply-and-dosages.rq",
            "value": 0.085911,
            "range": "0.085911-0.085911",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication.rq",
            "value": 0.131396,
            "range": "0.131396-0.131396",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-text.rq",
            "value": 0.403107,
            "range": "0.403107-0.403107",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document.rq",
            "value": 0.14261,
            "range": "0.14261-0.14261",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-from-server.rq",
            "value": 0.030946,
            "range": "0.030946-0.030946",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization.rq",
            "value": 0.076923,
            "range": "0.076923-0.076923",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient.rq",
            "value": 0.048675,
            "range": "0.048675-0.048675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/procedure.rq",
            "value": 0.147872,
            "range": "0.147872-0.147872",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/record.rq",
            "value": 1.129051,
            "range": "1.129051-1.129051",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-performer.rq",
            "value": 0.019466,
            "range": "0.019466-0.019466",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-results.rq",
            "value": 0.179027,
            "range": "0.179027-0.179027",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report.rq",
            "value": 0.192406,
            "range": "0.192406-0.192406",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation.rq",
            "value": 0.061527,
            "range": "0.061527-0.061527",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant.rq",
            "value": 0.056401,
            "range": "0.056401-0.056401",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reason-findings.rq",
            "value": 0.19182,
            "range": "0.19182-0.19182",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/category-text-findings.rq",
            "value": 0.07866,
            "range": "0.07866-0.07866",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/code-findings.rq",
            "value": 0.09245,
            "range": "0.09245-0.09245",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/date-findings.rq",
            "value": 0.172195,
            "range": "0.172195-0.172195",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-version-findings.rq",
            "value": 0.007504,
            "range": "0.007504-0.007504",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-findings.rq",
            "value": 0.260608,
            "range": "0.260608-0.260608",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-findings.rq",
            "value": 0.049047,
            "range": "0.049047-0.049047",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.061677,
            "range": "0.061677-0.061677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-findings.rq",
            "value": 0.68275,
            "range": "0.68275-0.68275",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-findings.rq",
            "value": 0.048838,
            "range": "0.048838-0.048838",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-component-findings.rq",
            "value": 0.086055,
            "range": "0.086055-0.086055",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-findings.rq",
            "value": 0.187446,
            "range": "0.187446-0.187446",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-findings.rq",
            "value": 0.045541,
            "range": "0.045541-0.045541",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-findings.rq",
            "value": 0.041289,
            "range": "0.041289-0.041289",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-reference-findings.rq",
            "value": 0.180692,
            "range": "0.180692-0.180692",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/recorded-date-findings.rq",
            "value": 0.052518,
            "range": "0.052518-0.052518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-display-findings.rq",
            "value": 0.213149,
            "range": "0.213149-0.213149",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-without-server-findings.rq",
            "value": 0.098283,
            "range": "0.098283-0.098283",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/repeated-id-findings.rq",
            "value": 0.106665,
            "range": "0.106665-0.106665",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-findings.rq",
            "value": 0.122597,
            "range": "0.122597-0.122597",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-result-findings.rq",
            "value": 0.098204,
            "range": "0.098204-0.098204",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/resource-type-findings.rq",
            "value": 1.081889,
            "range": "1.081889-1.081889",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-findings.rq",
            "value": 0.083767,
            "range": "0.083767-0.083767",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-findings.rq",
            "value": 0.073301,
            "range": "0.073301-0.073301",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/detect.rq",
            "value": 0.007681,
            "range": "0.007681-0.007681",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/document-table",
            "value": 1.298502,
            "range": "1.298502-1.298502",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/lift",
            "value": 4.391415,
            "range": "4.391415-4.391415",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/source-validation",
            "value": 8.800566,
            "range": "8.800566-8.800566",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/accounting",
            "value": 2.401361,
            "range": "2.401361-2.401361",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/dataset",
            "value": 0.0594,
            "range": "0.0594-0.0594",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/index",
            "value": 2.20339,
            "range": "2.20339-2.20339",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/mapping",
            "value": 4.373991,
            "range": "4.373991-4.373991",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/records",
            "value": 0.794505,
            "range": "0.794505-0.794505",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/output-validation",
            "value": 13.512059,
            "range": "13.512059-13.512059",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/findings",
            "value": 5.22457,
            "range": "5.22457-5.22457",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unresolved-addresses",
            "value": 0.276961,
            "range": "0.276961-0.276961",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/detect",
            "value": 0.00782,
            "range": "0.00782-0.00782",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/summary",
            "value": 0.107249,
            "range": "0.107249-0.107249",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/serialising",
            "value": 8.43433,
            "range": "8.43433-8.43433",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unaccounted",
            "value": 3.942192,
            "range": "3.942192-3.942192",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/graph",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7a293b50f329e9697119ef46a49e0e55365198126021106ead2739fd58656a51"
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/findings",
            "value": 4050084,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4b992f4465adb297491a6571d8108f50b9d23e5375d2b20338ace4af174e227d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/first",
            "value": 13.083999,
            "range": "12.650958-13.09091",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries. sha256 da8b599d1bafbc500fd74a1aded71f6a426dde36edc25b0fd86856595e9ad292, 14900379 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/second",
            "value": 11.776723,
            "range": "11.547313-12.040422",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/profiled",
            "value": 12.795547,
            "range": "12.795547-12.795547",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/first",
            "value": 639827968,
            "range": "639827968-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/second",
            "value": 639827968,
            "range": "639827968-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/rss",
            "value": 1028395008,
            "range": "964833280-1042731008",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/records",
            "value": 3987,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/triples",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/findings",
            "value": 68397,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/coding-system-table.rq",
            "value": 0.170552,
            "range": "0.170552-0.170552",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-table.rq",
            "value": 0.01321,
            "range": "0.01321-0.01321",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-table.rq",
            "value": 0.012606,
            "range": "0.012606-0.012606",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-table.rq",
            "value": 0.015772,
            "range": "0.015772-0.015772",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document-table.rq",
            "value": 0.00906,
            "range": "0.00906-0.00906",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-table.rq",
            "value": 0.021116,
            "range": "0.021116-0.021116",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-table.rq",
            "value": 0.008541,
            "range": "0.008541-0.008541",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-table.rq",
            "value": 0.00845,
            "range": "0.00845-0.00845",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reasons.rq",
            "value": 0.095364,
            "range": "0.095364-0.095364",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/allergy-intolerance.rq",
            "value": 0.013464,
            "range": "0.013464-0.013464",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/attachments.rq",
            "value": 0.025067,
            "range": "0.025067-0.025067",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/condition.rq",
            "value": 0.021675,
            "range": "0.021675-0.021675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/immunization.rq",
            "value": 0.015228,
            "range": "0.015228-0.015228",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-codes.rq",
            "value": 0.018685,
            "range": "0.018685-0.018685",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-identifiers.rq",
            "value": 0.012089,
            "range": "0.012089-0.012089",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-performer.rq",
            "value": 0.004282,
            "range": "0.004282-0.004282",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-quantities.rq",
            "value": 0.020399,
            "range": "0.020399-0.020399",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result.rq",
            "value": 0.021174,
            "range": "0.021174-0.021174",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription.rq",
            "value": 0.014537,
            "range": "0.014537-0.014537",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense.rq",
            "value": 0.010266,
            "range": "0.010266-0.010266",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-supply-and-dosages.rq",
            "value": 0.014179,
            "range": "0.014179-0.014179",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication.rq",
            "value": 0.015423,
            "range": "0.015423-0.015423",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-text.rq",
            "value": 0.090925,
            "range": "0.090925-0.090925",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document.rq",
            "value": 0.037045,
            "range": "0.037045-0.037045",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-from-server.rq",
            "value": 0.006631,
            "range": "0.006631-0.006631",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization.rq",
            "value": 0.016482,
            "range": "0.016482-0.016482",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient.rq",
            "value": 0.010852,
            "range": "0.010852-0.010852",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/procedure.rq",
            "value": 0.057573,
            "range": "0.057573-0.057573",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/record.rq",
            "value": 0.222946,
            "range": "0.222946-0.222946",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-performer.rq",
            "value": 0.004488,
            "range": "0.004488-0.004488",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-results.rq",
            "value": 0.02298,
            "range": "0.02298-0.02298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report.rq",
            "value": 0.047348,
            "range": "0.047348-0.047348",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation.rq",
            "value": 0.012554,
            "range": "0.012554-0.012554",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant.rq",
            "value": 0.011679,
            "range": "0.011679-0.011679",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reason-findings.rq",
            "value": 0.041677,
            "range": "0.041677-0.041677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/category-text-findings.rq",
            "value": 0.018939,
            "range": "0.018939-0.018939",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/code-findings.rq",
            "value": 0.026861,
            "range": "0.026861-0.026861",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/date-findings.rq",
            "value": 0.03555,
            "range": "0.03555-0.03555",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-version-findings.rq",
            "value": 0.001679,
            "range": "0.001679-0.001679",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-findings.rq",
            "value": 0.024977,
            "range": "0.024977-0.024977",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-findings.rq",
            "value": 0.011044,
            "range": "0.011044-0.011044",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.013369,
            "range": "0.013369-0.013369",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-findings.rq",
            "value": 0.135754,
            "range": "0.135754-0.135754",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-findings.rq",
            "value": 0.010477,
            "range": "0.010477-0.010477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-component-findings.rq",
            "value": 0.026301,
            "range": "0.026301-0.026301",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-findings.rq",
            "value": 0.030197,
            "range": "0.030197-0.030197",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-findings.rq",
            "value": 0.01051,
            "range": "0.01051-0.01051",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-findings.rq",
            "value": 0.009665,
            "range": "0.009665-0.009665",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-reference-findings.rq",
            "value": 0.038597,
            "range": "0.038597-0.038597",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/recorded-date-findings.rq",
            "value": 0.012171,
            "range": "0.012171-0.012171",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-display-findings.rq",
            "value": 0.050096,
            "range": "0.050096-0.050096",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-without-server-findings.rq",
            "value": 0.020216,
            "range": "0.020216-0.020216",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/repeated-id-findings.rq",
            "value": 0.018425,
            "range": "0.018425-0.018425",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-findings.rq",
            "value": 0.029013,
            "range": "0.029013-0.029013",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-result-findings.rq",
            "value": 0.017227,
            "range": "0.017227-0.017227",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/resource-type-findings.rq",
            "value": 0.023123,
            "range": "0.023123-0.023123",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-findings.rq",
            "value": 0.017157,
            "range": "0.017157-0.017157",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-findings.rq",
            "value": 0.013342,
            "range": "0.013342-0.013342",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/detect.rq",
            "value": 0.007394,
            "range": "0.007394-0.007394",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/document-table",
            "value": 0.362879,
            "range": "0.362879-0.362879",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/lift",
            "value": 1.237816,
            "range": "1.237816-1.237816",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/source-validation",
            "value": 2.064677,
            "range": "2.064677-2.064677",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/accounting",
            "value": 0.592856,
            "range": "0.592856-0.592856",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/dataset",
            "value": 0.014587,
            "range": "0.014587-0.014587",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/index",
            "value": 0.569108,
            "range": "0.569108-0.569108",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/mapping",
            "value": 0.880429,
            "range": "0.880429-0.880429",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/records",
            "value": 0.158705,
            "range": "0.158705-0.158705",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/output-validation",
            "value": 3.10667,
            "range": "3.10667-3.10667",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/findings",
            "value": 0.91243,
            "range": "0.91243-0.91243",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unresolved-addresses",
            "value": 0.082328,
            "range": "0.082328-0.082328",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/detect",
            "value": 0.007519,
            "range": "0.007519-0.007519",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/summary",
            "value": 0.024366,
            "range": "0.024366-0.024366",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/serialising",
            "value": 1.731463,
            "range": "1.731463-1.731463",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unaccounted",
            "value": 1.049713,
            "range": "1.049713-1.049713",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/graph",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 8e086cb7aab88e92c913f3ca926a715c879be434ff2ea8f59b3d7677a6a406a2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/findings",
            "value": 1041849,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 16af8499003462b269135d82ddfce43a20a3fa92be30be18cb3b28d448bbf2b7"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/first",
            "value": 62.287829,
            "range": "56.869992-62.828877",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people. sha256 4a4a24b9c8a052cc60465fffe5da9f34ab71101f3479ebdcc794e61e6d76d7f2, 56150281 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/second",
            "value": 56.328221,
            "range": "55.250053-57.206958",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/profiled",
            "value": 59.344544,
            "range": "59.344544-59.344544",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/first",
            "value": 2552430592,
            "range": "2552430592-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/second",
            "value": 2552430592,
            "range": "2552430592-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/rss",
            "value": 3054116864,
            "range": "3039686656-3088023552",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/records",
            "value": 19728,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/triples",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/findings",
            "value": 198775,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/coding-system-table.rq",
            "value": 0.642148,
            "range": "0.642148-0.642148",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-table.rq",
            "value": 0.058246,
            "range": "0.058246-0.058246",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-table.rq",
            "value": 0.082562,
            "range": "0.082562-0.082562",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-table.rq",
            "value": 0.069739,
            "range": "0.069739-0.069739",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document-table.rq",
            "value": 0.038095,
            "range": "0.038095-0.038095",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-table.rq",
            "value": 0.10188,
            "range": "0.10188-0.10188",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-table.rq",
            "value": 0.04588,
            "range": "0.04588-0.04588",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-table.rq",
            "value": 0.046317,
            "range": "0.046317-0.046317",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reasons.rq",
            "value": 0.465677,
            "range": "0.465677-0.465677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/allergy-intolerance.rq",
            "value": 0.070373,
            "range": "0.070373-0.070373",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/attachments.rq",
            "value": 0.104907,
            "range": "0.104907-0.104907",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/condition.rq",
            "value": 0.103365,
            "range": "0.103365-0.103365",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/immunization.rq",
            "value": 0.068411,
            "range": "0.068411-0.068411",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-codes.rq",
            "value": 0.353819,
            "range": "0.353819-0.353819",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-identifiers.rq",
            "value": 0.104649,
            "range": "0.104649-0.104649",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-performer.rq",
            "value": 0.027496,
            "range": "0.027496-0.027496",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-quantities.rq",
            "value": 0.313884,
            "range": "0.313884-0.313884",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result.rq",
            "value": 0.42256,
            "range": "0.42256-0.42256",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription.rq",
            "value": 0.079892,
            "range": "0.079892-0.079892",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense.rq",
            "value": 0.056647,
            "range": "0.056647-0.056647",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-supply-and-dosages.rq",
            "value": 0.080088,
            "range": "0.080088-0.080088",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication.rq",
            "value": 0.118303,
            "range": "0.118303-0.118303",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-text.rq",
            "value": 0.337367,
            "range": "0.337367-0.337367",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document.rq",
            "value": 0.109195,
            "range": "0.109195-0.109195",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-from-server.rq",
            "value": 0.035608,
            "range": "0.035608-0.035608",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization.rq",
            "value": 0.091292,
            "range": "0.091292-0.091292",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient.rq",
            "value": 0.055804,
            "range": "0.055804-0.055804",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/procedure.rq",
            "value": 0.160146,
            "range": "0.160146-0.160146",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/record.rq",
            "value": 1.635385,
            "range": "1.635385-1.635385",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-performer.rq",
            "value": 0.024971,
            "range": "0.024971-0.024971",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-results.rq",
            "value": 0.321598,
            "range": "0.321598-0.321598",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report.rq",
            "value": 0.215477,
            "range": "0.215477-0.215477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation.rq",
            "value": 0.073314,
            "range": "0.073314-0.073314",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant.rq",
            "value": 0.065884,
            "range": "0.065884-0.065884",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reason-findings.rq",
            "value": 0.25475,
            "range": "0.25475-0.25475",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/category-text-findings.rq",
            "value": 0.093253,
            "range": "0.093253-0.093253",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/code-findings.rq",
            "value": 0.104652,
            "range": "0.104652-0.104652",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/date-findings.rq",
            "value": 0.252512,
            "range": "0.252512-0.252512",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-version-findings.rq",
            "value": 0.009206,
            "range": "0.009206-0.009206",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-findings.rq",
            "value": 0.477771,
            "range": "0.477771-0.477771",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-findings.rq",
            "value": 0.061039,
            "range": "0.061039-0.061039",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.072717,
            "range": "0.072717-0.072717",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-findings.rq",
            "value": 0.820676,
            "range": "0.820676-0.820676",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-findings.rq",
            "value": 0.054772,
            "range": "0.054772-0.054772",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-component-findings.rq",
            "value": 0.17388,
            "range": "0.17388-0.17388",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-findings.rq",
            "value": 0.302183,
            "range": "0.302183-0.302183",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-findings.rq",
            "value": 0.056152,
            "range": "0.056152-0.056152",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-findings.rq",
            "value": 0.051432,
            "range": "0.051432-0.051432",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-reference-findings.rq",
            "value": 0.263556,
            "range": "0.263556-0.263556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/recorded-date-findings.rq",
            "value": 0.063819,
            "range": "0.063819-0.063819",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-display-findings.rq",
            "value": 0.273805,
            "range": "0.273805-0.273805",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-without-server-findings.rq",
            "value": 0.115855,
            "range": "0.115855-0.115855",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/repeated-id-findings.rq",
            "value": 0.137005,
            "range": "0.137005-0.137005",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-findings.rq",
            "value": 0.120031,
            "range": "0.120031-0.120031",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-result-findings.rq",
            "value": 0.146692,
            "range": "0.146692-0.146692",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/resource-type-findings.rq",
            "value": 0.108076,
            "range": "0.108076-0.108076",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-findings.rq",
            "value": 0.11788,
            "range": "0.11788-0.11788",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-findings.rq",
            "value": 0.073906,
            "range": "0.073906-0.073906",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/detect.rq",
            "value": 0.007459,
            "range": "0.007459-0.007459",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/document-table",
            "value": 1.512311,
            "range": "1.512311-1.512311",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/lift",
            "value": 4.997763,
            "range": "4.997763-4.997763",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/source-validation",
            "value": 9.992405,
            "range": "9.992405-9.992405",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/accounting",
            "value": 1.733556,
            "range": "1.733556-1.733556",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/dataset",
            "value": 0.064869,
            "range": "0.064869-0.064869",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/index",
            "value": 2.548294,
            "range": "2.548294-2.548294",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/mapping",
            "value": 5.705491,
            "range": "5.705491-5.705491",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/records",
            "value": 1.092577,
            "range": "1.092577-1.092577",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/output-validation",
            "value": 16.572751,
            "range": "16.572751-16.572751",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/findings",
            "value": 5.558871,
            "range": "5.558871-5.558871",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unresolved-addresses",
            "value": 0.279915,
            "range": "0.279915-0.279915",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/detect",
            "value": 0.007595,
            "range": "0.007595-0.007595",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/summary",
            "value": 0.116254,
            "range": "0.116254-0.116254",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/serialising",
            "value": 5.07891,
            "range": "5.07891-5.07891",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unaccounted",
            "value": 4.08298,
            "range": "4.08298-4.08298",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/graph",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 5241acfb6f7cb6de9f7a1d1e19b5c9196c248ef9cd96d821dd26d0b158ad15b4"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/findings",
            "value": 3011148,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 9de40e54a3ada526d408a98ee9cc21153fe48c9ae091f3502213adb8f892a2b2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/first",
            "value": 18.744051,
            "range": "18.259963-18.914866",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people. sha256 843940715d3b2edbdc883697a79ebf312a7754df290d28b0cd89e228549fa678, 19009113 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/second",
            "value": 17.246622,
            "range": "17.057785-17.606313",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/profiled",
            "value": 19.616492,
            "range": "19.616492-19.616492",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/first",
            "value": 723714048,
            "range": "723714048-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/second",
            "value": 723714048,
            "range": "723714048-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/rss",
            "value": 1122525184,
            "range": "1071984640-1131962368",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/records",
            "value": 6223,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/triples",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/findings",
            "value": 72909,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/coding-system-table.rq",
            "value": 0.232227,
            "range": "0.232227-0.232227",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-table.rq",
            "value": 0.019207,
            "range": "0.019207-0.019207",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-table.rq",
            "value": 0.025145,
            "range": "0.025145-0.025145",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-table.rq",
            "value": 0.022918,
            "range": "0.022918-0.022918",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document-table.rq",
            "value": 0.012258,
            "range": "0.012258-0.012258",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-table.rq",
            "value": 0.032739,
            "range": "0.032739-0.032739",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-table.rq",
            "value": 0.014455,
            "range": "0.014455-0.014455",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-table.rq",
            "value": 0.014395,
            "range": "0.014395-0.014395",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reasons.rq",
            "value": 0.157076,
            "range": "0.157076-0.157076",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/allergy-intolerance.rq",
            "value": 0.025153,
            "range": "0.025153-0.025153",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/attachments.rq",
            "value": 0.037541,
            "range": "0.037541-0.037541",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/condition.rq",
            "value": 0.042185,
            "range": "0.042185-0.042185",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/immunization.rq",
            "value": 0.0276,
            "range": "0.0276-0.0276",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-codes.rq",
            "value": 0.092625,
            "range": "0.092625-0.092625",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-identifiers.rq",
            "value": 0.032105,
            "range": "0.032105-0.032105",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-performer.rq",
            "value": 0.008451,
            "range": "0.008451-0.008451",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-quantities.rq",
            "value": 0.086611,
            "range": "0.086611-0.086611",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result.rq",
            "value": 0.107003,
            "range": "0.107003-0.107003",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription.rq",
            "value": 0.026929,
            "range": "0.026929-0.026929",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense.rq",
            "value": 0.019902,
            "range": "0.019902-0.019902",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-supply-and-dosages.rq",
            "value": 0.032338,
            "range": "0.032338-0.032338",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication.rq",
            "value": 0.036298,
            "range": "0.036298-0.036298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-text.rq",
            "value": 0.119572,
            "range": "0.119572-0.119572",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document.rq",
            "value": 0.044778,
            "range": "0.044778-0.044778",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-from-server.rq",
            "value": 0.0112,
            "range": "0.0112-0.0112",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization.rq",
            "value": 0.030031,
            "range": "0.030031-0.030031",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient.rq",
            "value": 0.022157,
            "range": "0.022157-0.022157",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/procedure.rq",
            "value": 0.058553,
            "range": "0.058553-0.058553",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/record.rq",
            "value": 0.494992,
            "range": "0.494992-0.494992",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-performer.rq",
            "value": 0.008056,
            "range": "0.008056-0.008056",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-results.rq",
            "value": 0.088156,
            "range": "0.088156-0.088156",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report.rq",
            "value": 0.074176,
            "range": "0.074176-0.074176",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation.rq",
            "value": 0.023913,
            "range": "0.023913-0.023913",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant.rq",
            "value": 0.022504,
            "range": "0.022504-0.022504",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reason-findings.rq",
            "value": 0.082191,
            "range": "0.082191-0.082191",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/category-text-findings.rq",
            "value": 0.033228,
            "range": "0.033228-0.033228",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/code-findings.rq",
            "value": 0.037945,
            "range": "0.037945-0.037945",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/date-findings.rq",
            "value": 0.078668,
            "range": "0.078668-0.078668",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-version-findings.rq",
            "value": 0.003189,
            "range": "0.003189-0.003189",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-findings.rq",
            "value": 0.128011,
            "range": "0.128011-0.128011",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-findings.rq",
            "value": 0.020467,
            "range": "0.020467-0.020467",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.02576,
            "range": "0.02576-0.02576",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-findings.rq",
            "value": 0.272263,
            "range": "0.272263-0.272263",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-findings.rq",
            "value": 0.018196,
            "range": "0.018196-0.018196",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-component-findings.rq",
            "value": 0.059303,
            "range": "0.059303-0.059303",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-findings.rq",
            "value": 0.088212,
            "range": "0.088212-0.088212",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-findings.rq",
            "value": 0.019578,
            "range": "0.019578-0.019578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-findings.rq",
            "value": 0.017083,
            "range": "0.017083-0.017083",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-reference-findings.rq",
            "value": 0.083831,
            "range": "0.083831-0.083831",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/recorded-date-findings.rq",
            "value": 0.022402,
            "range": "0.022402-0.022402",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-display-findings.rq",
            "value": 0.083994,
            "range": "0.083994-0.083994",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-without-server-findings.rq",
            "value": 0.037625,
            "range": "0.037625-0.037625",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/repeated-id-findings.rq",
            "value": 0.04285,
            "range": "0.04285-0.04285",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-findings.rq",
            "value": 0.044509,
            "range": "0.044509-0.044509",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-result-findings.rq",
            "value": 0.045593,
            "range": "0.045593-0.045593",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/resource-type-findings.rq",
            "value": 0.038947,
            "range": "0.038947-0.038947",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-findings.rq",
            "value": 0.037068,
            "range": "0.037068-0.037068",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-findings.rq",
            "value": 0.02424,
            "range": "0.02424-0.02424",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/detect.rq",
            "value": 0.007659,
            "range": "0.007659-0.007659",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/document-table",
            "value": 0.516074,
            "range": "0.516074-0.516074",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/lift",
            "value": 1.705538,
            "range": "1.705538-1.705538",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/source-validation",
            "value": 3.402863,
            "range": "3.402863-3.402863",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/accounting",
            "value": 0.646293,
            "range": "0.646293-0.646293",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/dataset",
            "value": 0.021673,
            "range": "0.021673-0.021673",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/index",
            "value": 0.836436,
            "range": "0.836436-0.836436",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/mapping",
            "value": 1.798985,
            "range": "1.798985-1.798985",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/records",
            "value": 0.304385,
            "range": "0.304385-0.304385",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/output-validation",
            "value": 5.120797,
            "range": "5.120797-5.120797",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/findings",
            "value": 1.785237,
            "range": "1.785237-1.785237",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unresolved-addresses",
            "value": 0.097323,
            "range": "0.097323-0.097323",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/detect",
            "value": 0.007799,
            "range": "0.007799-0.007799",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/summary",
            "value": 0.038481,
            "range": "0.038481-0.038481",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/serialising",
            "value": 1.989871,
            "range": "1.989871-1.989871",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unaccounted",
            "value": 1.344738,
            "range": "1.344738-1.344738",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/graph",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4a0efd931e29be8bc7f18e54577b1a79251cdec785961503cfb14c2add98830d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/findings",
            "value": 1105859,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 e2390f83b5b1732a36a59e3e296df199c0085c7e875099be9d3dc489ee652832"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.775362,
            "range": "0.731437-0.841376",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.011854,
            "range": "0.00972-0.016181",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.763489,
            "range": "0.721717-0.82747",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.004683,
            "range": "0.004459-0.005387",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.017525,
            "range": "0.017078-0.267946",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001479,
            "range": "0.0013-0.003783",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "15621eef1b6e4578c254871490838e45939a8487",
          "message": "Merge pull request #77 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T21:50:16Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-fhir-r4/commit/15621eef1b6e4578c254871490838e45939a8487"
        },
        "date": 1795442426506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 6.210059,
            "range": "6.205102-6.211371",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 5.905291,
            "range": "5.904937-5.906333",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 6.355838,
            "range": "6.355838-6.355838",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 380825600,
            "range": "350822400-458850304",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.058245,
            "range": "0.058245-0.058245",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.008497,
            "range": "0.008497-0.008497",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.017075,
            "range": "0.017075-0.017075",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.009114,
            "range": "0.009114-0.009114",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.004634,
            "range": "0.004634-0.004634",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.016552,
            "range": "0.016552-0.016552",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.006492,
            "range": "0.006492-0.006492",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.006796,
            "range": "0.006796-0.006796",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.062733,
            "range": "0.062733-0.062733",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.009801,
            "range": "0.009801-0.009801",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.01095,
            "range": "0.01095-0.01095",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.008973,
            "range": "0.008973-0.008973",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.008515,
            "range": "0.008515-0.008515",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.097954,
            "range": "0.097954-0.097954",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.021526,
            "range": "0.021526-0.021526",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.003721,
            "range": "0.003721-0.003721",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.114575,
            "range": "0.114575-0.114575",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.116336,
            "range": "0.116336-0.116336",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.011216,
            "range": "0.011216-0.011216",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.007177,
            "range": "0.007177-0.007177",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.009466,
            "range": "0.009466-0.009466",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.009048,
            "range": "0.009048-0.009048",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.030827,
            "range": "0.030827-0.030827",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.008056,
            "range": "0.008056-0.008056",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.005186,
            "range": "0.005186-0.005186",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.012132,
            "range": "0.012132-0.012132",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.007593,
            "range": "0.007593-0.007593",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.007122,
            "range": "0.007122-0.007122",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.266277,
            "range": "0.266277-0.266277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.003758,
            "range": "0.003758-0.003758",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.010465,
            "range": "0.010465-0.010465",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.008052,
            "range": "0.008052-0.008052",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.010337,
            "range": "0.010337-0.010337",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.009011,
            "range": "0.009011-0.009011",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.037194,
            "range": "0.037194-0.037194",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.011734,
            "range": "0.011734-0.011734",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.008283,
            "range": "0.008283-0.008283",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.0407,
            "range": "0.0407-0.0407",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.001392,
            "range": "0.001392-0.001392",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.077426,
            "range": "0.077426-0.077426",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.008395,
            "range": "0.008395-0.008395",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.009942,
            "range": "0.009942-0.009942",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.063949,
            "range": "0.063949-0.063949",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.006794,
            "range": "0.006794-0.006794",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.009871,
            "range": "0.009871-0.009871",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.064805,
            "range": "0.064805-0.064805",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.008299,
            "range": "0.008299-0.008299",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.007875,
            "range": "0.007875-0.007875",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.055521,
            "range": "0.055521-0.055521",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.008806,
            "range": "0.008806-0.008806",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.030954,
            "range": "0.030954-0.030954",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.03787,
            "range": "0.03787-0.03787",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.023954,
            "range": "0.023954-0.023954",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.011723,
            "range": "0.011723-0.011723",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.01018,
            "range": "0.01018-0.01018",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.009483,
            "range": "0.009483-0.009483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.017516,
            "range": "0.017516-0.017516",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.010296,
            "range": "0.010296-0.010296",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.00703,
            "range": "0.00703-0.00703",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.165494,
            "range": "0.165494-0.165494",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.347011,
            "range": "0.347011-0.347011",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 0.942175,
            "range": "0.942175-0.942175",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.017522,
            "range": "0.017522-0.017522",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.009768,
            "range": "0.009768-0.009768",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.184298,
            "range": "0.184298-0.184298",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 0.902882,
            "range": "0.902882-0.902882",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.220914,
            "range": "0.220914-0.220914",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 2.478853,
            "range": "2.478853-2.478853",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.761686,
            "range": "0.761686-0.761686",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.037126,
            "range": "0.037126-0.037126",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.007102,
            "range": "0.007102-0.007102",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.011296,
            "range": "0.011296-0.011296",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.105282,
            "range": "0.105282-0.105282",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.164428,
            "range": "0.164428-0.164428",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/first",
            "value": 1.958654,
            "range": "1.957918-1.958997",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle. sha256 2703dc1e7e920fa1e45d16c58f8338ef13b3cc1916ee40ffa461112d54dce5de, 1098812 bytes"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/second",
            "value": 1.741514,
            "range": "1.733495-1.746034",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/profiled",
            "value": 1.971614,
            "range": "1.971614-1.971614",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/first",
            "value": 86179840,
            "range": "86179840-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/second",
            "value": 86179840,
            "range": "86179840-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/rss",
            "value": 371965952,
            "range": "352661504-374562816",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/records",
            "value": 647,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/triples",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/findings",
            "value": 2256,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/coding-system-table.rq",
            "value": 0.018698,
            "range": "0.018698-0.018698",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-table.rq",
            "value": 0.003195,
            "range": "0.003195-0.003195",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-table.rq",
            "value": 0.004516,
            "range": "0.004516-0.004516",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-table.rq",
            "value": 0.002786,
            "range": "0.002786-0.002786",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document-table.rq",
            "value": 0.001412,
            "range": "0.001412-0.001412",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-table.rq",
            "value": 0.004243,
            "range": "0.004243-0.004243",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-table.rq",
            "value": 0.001871,
            "range": "0.001871-0.001871",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-table.rq",
            "value": 0.001986,
            "range": "0.001986-0.001986",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reasons.rq",
            "value": 0.020179,
            "range": "0.020179-0.020179",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/allergy-intolerance.rq",
            "value": 0.002573,
            "range": "0.002573-0.002573",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/attachments.rq",
            "value": 0.002497,
            "range": "0.002497-0.002497",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/condition.rq",
            "value": 0.006045,
            "range": "0.006045-0.006045",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/immunization.rq",
            "value": 0.00219,
            "range": "0.00219-0.00219",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-codes.rq",
            "value": 0.014657,
            "range": "0.014657-0.014657",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-identifiers.rq",
            "value": 0.003759,
            "range": "0.003759-0.003759",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-performer.rq",
            "value": 0.000834,
            "range": "0.000834-0.000834",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-quantities.rq",
            "value": 0.015001,
            "range": "0.015001-0.015001",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result.rq",
            "value": 0.017787,
            "range": "0.017787-0.017787",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription.rq",
            "value": 0.002454,
            "range": "0.002454-0.002454",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense.rq",
            "value": 0.001518,
            "range": "0.001518-0.001518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-supply-and-dosages.rq",
            "value": 0.006594,
            "range": "0.006594-0.006594",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication.rq",
            "value": 0.006722,
            "range": "0.006722-0.006722",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-text.rq",
            "value": 0.007873,
            "range": "0.007873-0.007873",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document.rq",
            "value": 0.001755,
            "range": "0.001755-0.001755",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-from-server.rq",
            "value": 0.001162,
            "range": "0.001162-0.001162",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization.rq",
            "value": 0.002736,
            "range": "0.002736-0.002736",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient.rq",
            "value": 0.002079,
            "range": "0.002079-0.002079",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/procedure.rq",
            "value": 0.003937,
            "range": "0.003937-0.003937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/record.rq",
            "value": 0.060919,
            "range": "0.060919-0.060919",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-performer.rq",
            "value": 0.000926,
            "range": "0.000926-0.000926",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-results.rq",
            "value": 0.002328,
            "range": "0.002328-0.002328",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report.rq",
            "value": 0.001667,
            "range": "0.001667-0.001667",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation.rq",
            "value": 0.002119,
            "range": "0.002119-0.002119",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant.rq",
            "value": 0.001879,
            "range": "0.001879-0.001879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reason-findings.rq",
            "value": 0.010374,
            "range": "0.010374-0.010374",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/category-text-findings.rq",
            "value": 0.002976,
            "range": "0.002976-0.002976",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/code-findings.rq",
            "value": 0.00249,
            "range": "0.00249-0.00249",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/date-findings.rq",
            "value": 0.012093,
            "range": "0.012093-0.012093",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-version-findings.rq",
            "value": 0.000307,
            "range": "0.000307-0.000307",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-findings.rq",
            "value": 0.016268,
            "range": "0.016268-0.016268",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-findings.rq",
            "value": 0.001733,
            "range": "0.001733-0.001733",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.002529,
            "range": "0.002529-0.002529",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-findings.rq",
            "value": 0.020215,
            "range": "0.020215-0.020215",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-findings.rq",
            "value": 0.001544,
            "range": "0.001544-0.001544",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-component-findings.rq",
            "value": 0.002203,
            "range": "0.002203-0.002203",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-findings.rq",
            "value": 0.010139,
            "range": "0.010139-0.010139",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-findings.rq",
            "value": 0.001611,
            "range": "0.001611-0.001611",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-findings.rq",
            "value": 0.001453,
            "range": "0.001453-0.001453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-reference-findings.rq",
            "value": 0.012077,
            "range": "0.012077-0.012077",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/recorded-date-findings.rq",
            "value": 0.002192,
            "range": "0.002192-0.002192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-display-findings.rq",
            "value": 0.006896,
            "range": "0.006896-0.006896",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-without-server-findings.rq",
            "value": 0.007713,
            "range": "0.007713-0.007713",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/repeated-id-findings.rq",
            "value": 0.004558,
            "range": "0.004558-0.004558",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-findings.rq",
            "value": 0.002438,
            "range": "0.002438-0.002438",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-result-findings.rq",
            "value": 0.002144,
            "range": "0.002144-0.002144",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/resource-type-findings.rq",
            "value": 0.002259,
            "range": "0.002259-0.002259",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-findings.rq",
            "value": 0.003286,
            "range": "0.003286-0.003286",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-findings.rq",
            "value": 0.002046,
            "range": "0.002046-0.002046",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/detect.rq",
            "value": 0.006953,
            "range": "0.006953-0.006953",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/document-table",
            "value": 0.050471,
            "range": "0.050471-0.050471",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/lift",
            "value": 0.110434,
            "range": "0.110434-0.110434",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/source-validation",
            "value": 0.272574,
            "range": "0.272574-0.272574",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/accounting",
            "value": 0.020826,
            "range": "0.020826-0.020826",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/dataset",
            "value": 0.002762,
            "range": "0.002762-0.002762",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/index",
            "value": 0.058015,
            "range": "0.058015-0.058015",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/mapping",
            "value": 0.199331,
            "range": "0.199331-0.199331",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/records",
            "value": 0.413904,
            "range": "0.413904-0.413904",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/output-validation",
            "value": 0.554015,
            "range": "0.554015-0.554015",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/findings",
            "value": 0.178688,
            "range": "0.178688-0.178688",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unresolved-addresses",
            "value": 0.010252,
            "range": "0.010252-0.010252",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/detect",
            "value": 0.00701,
            "range": "0.00701-0.00701",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/summary",
            "value": 0.00322,
            "range": "0.00322-0.00322",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/serialising",
            "value": 0.041461,
            "range": "0.041461-0.041461",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unaccounted",
            "value": 0.048652,
            "range": "0.048652-0.048652",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/graph",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7cc449ffbde5128e52fafcf8acfb64362df9b08f54ac053668923208f8175856"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/findings",
            "value": 33875,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 b652127fa85ae51be3efc3f467bdff274a9e99631bf26d3f1bccb60d4dc5eb7d"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/first",
            "value": 46.644874,
            "range": "46.45013-46.703511",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data. sha256 f20b86408066ece2d25a7b02d380b7652f22d16df9dab613a0c73c9969b17da8, 51227791 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/second",
            "value": 44.826492,
            "range": "44.618756-45.1329",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/profiled",
            "value": 47.799744,
            "range": "47.799744-47.799744",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/first",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/second",
            "value": 2518876160,
            "range": "2518876160-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/rss",
            "value": 3329409024,
            "range": "3273998336-3343310848",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime/records",
            "value": 16833,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data."
          },
          {
            "name": "fhir-r4-synthea-lifetime/triples",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/findings",
            "value": 267199,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/coding-system-table.rq",
            "value": 0.463469,
            "range": "0.463469-0.463469",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-table.rq",
            "value": 0.044653,
            "range": "0.044653-0.044653",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-table.rq",
            "value": 0.054006,
            "range": "0.054006-0.054006",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-table.rq",
            "value": 0.067388,
            "range": "0.067388-0.067388",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document-table.rq",
            "value": 0.029344,
            "range": "0.029344-0.029344",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-table.rq",
            "value": 0.073472,
            "range": "0.073472-0.073472",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-table.rq",
            "value": 0.029195,
            "range": "0.029195-0.029195",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-table.rq",
            "value": 0.02902,
            "range": "0.02902-0.02902",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reasons.rq",
            "value": 0.418764,
            "range": "0.418764-0.418764",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/allergy-intolerance.rq",
            "value": 0.062516,
            "range": "0.062516-0.062516",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/attachments.rq",
            "value": 0.097377,
            "range": "0.097377-0.097377",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/condition.rq",
            "value": 0.068241,
            "range": "0.068241-0.068241",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/immunization.rq",
            "value": 0.054615,
            "range": "0.054615-0.054615",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-codes.rq",
            "value": 0.179211,
            "range": "0.179211-0.179211",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-identifiers.rq",
            "value": 0.064135,
            "range": "0.064135-0.064135",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-performer.rq",
            "value": 0.019477,
            "range": "0.019477-0.019477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-quantities.rq",
            "value": 0.165712,
            "range": "0.165712-0.165712",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result.rq",
            "value": 0.203398,
            "range": "0.203398-0.203398",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription.rq",
            "value": 0.062082,
            "range": "0.062082-0.062082",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense.rq",
            "value": 0.040915,
            "range": "0.040915-0.040915",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-supply-and-dosages.rq",
            "value": 0.067514,
            "range": "0.067514-0.067514",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication.rq",
            "value": 0.108345,
            "range": "0.108345-0.108345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-text.rq",
            "value": 0.376957,
            "range": "0.376957-0.376957",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document.rq",
            "value": 0.120214,
            "range": "0.120214-0.120214",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-from-server.rq",
            "value": 0.028408,
            "range": "0.028408-0.028408",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization.rq",
            "value": 0.070394,
            "range": "0.070394-0.070394",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient.rq",
            "value": 0.043014,
            "range": "0.043014-0.043014",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/procedure.rq",
            "value": 0.124437,
            "range": "0.124437-0.124437",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/record.rq",
            "value": 1.019125,
            "range": "1.019125-1.019125",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-performer.rq",
            "value": 0.020978,
            "range": "0.020978-0.020978",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-results.rq",
            "value": 0.160844,
            "range": "0.160844-0.160844",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report.rq",
            "value": 0.15868,
            "range": "0.15868-0.15868",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation.rq",
            "value": 0.05344,
            "range": "0.05344-0.05344",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant.rq",
            "value": 0.046413,
            "range": "0.046413-0.046413",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reason-findings.rq",
            "value": 0.182812,
            "range": "0.182812-0.182812",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/category-text-findings.rq",
            "value": 0.074582,
            "range": "0.074582-0.074582",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/code-findings.rq",
            "value": 0.080855,
            "range": "0.080855-0.080855",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/date-findings.rq",
            "value": 0.156406,
            "range": "0.156406-0.156406",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-version-findings.rq",
            "value": 0.008368,
            "range": "0.008368-0.008368",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-findings.rq",
            "value": 0.259709,
            "range": "0.259709-0.259709",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-findings.rq",
            "value": 0.043844,
            "range": "0.043844-0.043844",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.055522,
            "range": "0.055522-0.055522",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-findings.rq",
            "value": 0.607139,
            "range": "0.607139-0.607139",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-findings.rq",
            "value": 0.041946,
            "range": "0.041946-0.041946",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-component-findings.rq",
            "value": 0.074674,
            "range": "0.074674-0.074674",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-findings.rq",
            "value": 0.175609,
            "range": "0.175609-0.175609",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-findings.rq",
            "value": 0.043072,
            "range": "0.043072-0.043072",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-findings.rq",
            "value": 0.039328,
            "range": "0.039328-0.039328",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-reference-findings.rq",
            "value": 0.173596,
            "range": "0.173596-0.173596",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/recorded-date-findings.rq",
            "value": 0.049422,
            "range": "0.049422-0.049422",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-display-findings.rq",
            "value": 0.187366,
            "range": "0.187366-0.187366",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-without-server-findings.rq",
            "value": 0.078886,
            "range": "0.078886-0.078886",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/repeated-id-findings.rq",
            "value": 0.084312,
            "range": "0.084312-0.084312",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-findings.rq",
            "value": 0.100518,
            "range": "0.100518-0.100518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-result-findings.rq",
            "value": 0.086394,
            "range": "0.086394-0.086394",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/resource-type-findings.rq",
            "value": 0.709693,
            "range": "0.709693-0.709693",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-findings.rq",
            "value": 0.073389,
            "range": "0.073389-0.073389",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-findings.rq",
            "value": 0.053328,
            "range": "0.053328-0.053328",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/detect.rq",
            "value": 0.007043,
            "range": "0.007043-0.007043",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/document-table",
            "value": 1.153604,
            "range": "1.153604-1.153604",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/lift",
            "value": 3.972597,
            "range": "3.972597-3.972597",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/source-validation",
            "value": 7.608182,
            "range": "7.608182-7.608182",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/accounting",
            "value": 2.020235,
            "range": "2.020235-2.020235",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/dataset",
            "value": 0.059597,
            "range": "0.059597-0.059597",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/index",
            "value": 1.911068,
            "range": "1.911068-1.911068",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/mapping",
            "value": 3.988307,
            "range": "3.988307-3.988307",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/records",
            "value": 0.766289,
            "range": "0.766289-0.766289",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/output-validation",
            "value": 12.101001,
            "range": "12.101001-12.101001",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/findings",
            "value": 4.48842,
            "range": "4.48842-4.48842",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unresolved-addresses",
            "value": 0.274825,
            "range": "0.274825-0.274825",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/detect",
            "value": 0.007195,
            "range": "0.007195-0.007195",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/summary",
            "value": 0.116825,
            "range": "0.116825-0.116825",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/serialising",
            "value": 6.530539,
            "range": "6.530539-6.530539",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unaccounted",
            "value": 2.80106,
            "range": "2.80106-2.80106",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/graph",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7a293b50f329e9697119ef46a49e0e55365198126021106ead2739fd58656a51"
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/findings",
            "value": 4050084,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4b992f4465adb297491a6571d8108f50b9d23e5375d2b20338ace4af174e227d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/first",
            "value": 11.337411,
            "range": "11.306761-11.440973",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries. sha256 da8b599d1bafbc500fd74a1aded71f6a426dde36edc25b0fd86856595e9ad292, 14900379 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/second",
            "value": 10.69109,
            "range": "10.609958-10.810687",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/profiled",
            "value": 11.581068,
            "range": "11.581068-11.581068",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/first",
            "value": 589496320,
            "range": "589496320-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/second",
            "value": 589496320,
            "range": "589496320-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/rss",
            "value": 962256896,
            "range": "955035648-978661376",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/records",
            "value": 3987,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/triples",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/findings",
            "value": 68397,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/coding-system-table.rq",
            "value": 0.152299,
            "range": "0.152299-0.152299",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-table.rq",
            "value": 0.011823,
            "range": "0.011823-0.011823",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-table.rq",
            "value": 0.012301,
            "range": "0.012301-0.012301",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-table.rq",
            "value": 0.013852,
            "range": "0.013852-0.013852",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document-table.rq",
            "value": 0.007674,
            "range": "0.007674-0.007674",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-table.rq",
            "value": 0.017757,
            "range": "0.017757-0.017757",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-table.rq",
            "value": 0.006988,
            "range": "0.006988-0.006988",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-table.rq",
            "value": 0.006707,
            "range": "0.006707-0.006707",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reasons.rq",
            "value": 0.104129,
            "range": "0.104129-0.104129",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/allergy-intolerance.rq",
            "value": 0.015092,
            "range": "0.015092-0.015092",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/attachments.rq",
            "value": 0.025982,
            "range": "0.025982-0.025982",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/condition.rq",
            "value": 0.021443,
            "range": "0.021443-0.021443",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/immunization.rq",
            "value": 0.015574,
            "range": "0.015574-0.015574",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-codes.rq",
            "value": 0.018882,
            "range": "0.018882-0.018882",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-identifiers.rq",
            "value": 0.011893,
            "range": "0.011893-0.011893",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-performer.rq",
            "value": 0.004401,
            "range": "0.004401-0.004401",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-quantities.rq",
            "value": 0.020014,
            "range": "0.020014-0.020014",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result.rq",
            "value": 0.0209,
            "range": "0.0209-0.0209",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription.rq",
            "value": 0.014737,
            "range": "0.014737-0.014737",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense.rq",
            "value": 0.009904,
            "range": "0.009904-0.009904",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-supply-and-dosages.rq",
            "value": 0.013748,
            "range": "0.013748-0.013748",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication.rq",
            "value": 0.014531,
            "range": "0.014531-0.014531",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-text.rq",
            "value": 0.092141,
            "range": "0.092141-0.092141",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document.rq",
            "value": 0.036337,
            "range": "0.036337-0.036337",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-from-server.rq",
            "value": 0.006882,
            "range": "0.006882-0.006882",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization.rq",
            "value": 0.017541,
            "range": "0.017541-0.017541",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient.rq",
            "value": 0.010681,
            "range": "0.010681-0.010681",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/procedure.rq",
            "value": 0.058736,
            "range": "0.058736-0.058736",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/record.rq",
            "value": 0.226162,
            "range": "0.226162-0.226162",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-performer.rq",
            "value": 0.004781,
            "range": "0.004781-0.004781",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-results.rq",
            "value": 0.022485,
            "range": "0.022485-0.022485",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report.rq",
            "value": 0.044985,
            "range": "0.044985-0.044985",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation.rq",
            "value": 0.012174,
            "range": "0.012174-0.012174",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant.rq",
            "value": 0.010853,
            "range": "0.010853-0.010853",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reason-findings.rq",
            "value": 0.042869,
            "range": "0.042869-0.042869",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/category-text-findings.rq",
            "value": 0.018539,
            "range": "0.018539-0.018539",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/code-findings.rq",
            "value": 0.025842,
            "range": "0.025842-0.025842",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/date-findings.rq",
            "value": 0.035059,
            "range": "0.035059-0.035059",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-version-findings.rq",
            "value": 0.001896,
            "range": "0.001896-0.001896",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-findings.rq",
            "value": 0.026117,
            "range": "0.026117-0.026117",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-findings.rq",
            "value": 0.01032,
            "range": "0.01032-0.01032",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.01361,
            "range": "0.01361-0.01361",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-findings.rq",
            "value": 0.139531,
            "range": "0.139531-0.139531",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-findings.rq",
            "value": 0.010071,
            "range": "0.010071-0.010071",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-component-findings.rq",
            "value": 0.023789,
            "range": "0.023789-0.023789",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-findings.rq",
            "value": 0.029764,
            "range": "0.029764-0.029764",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-findings.rq",
            "value": 0.009886,
            "range": "0.009886-0.009886",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-findings.rq",
            "value": 0.0094,
            "range": "0.0094-0.0094",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-reference-findings.rq",
            "value": 0.040644,
            "range": "0.040644-0.040644",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/recorded-date-findings.rq",
            "value": 0.012187,
            "range": "0.012187-0.012187",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-display-findings.rq",
            "value": 0.046862,
            "range": "0.046862-0.046862",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-without-server-findings.rq",
            "value": 0.018827,
            "range": "0.018827-0.018827",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/repeated-id-findings.rq",
            "value": 0.01814,
            "range": "0.01814-0.01814",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-findings.rq",
            "value": 0.027068,
            "range": "0.027068-0.027068",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-result-findings.rq",
            "value": 0.016515,
            "range": "0.016515-0.016515",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/resource-type-findings.rq",
            "value": 0.021687,
            "range": "0.021687-0.021687",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-findings.rq",
            "value": 0.016172,
            "range": "0.016172-0.016172",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-findings.rq",
            "value": 0.012294,
            "range": "0.012294-0.012294",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/detect.rq",
            "value": 0.006993,
            "range": "0.006993-0.006993",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/document-table",
            "value": 0.329914,
            "range": "0.329914-0.329914",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/lift",
            "value": 1.151436,
            "range": "1.151436-1.151436",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/source-validation",
            "value": 1.900871,
            "range": "1.900871-1.900871",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/accounting",
            "value": 0.517916,
            "range": "0.517916-0.517916",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/dataset",
            "value": 0.015142,
            "range": "0.015142-0.015142",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/index",
            "value": 0.513634,
            "range": "0.513634-0.513634",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/mapping",
            "value": 0.892093,
            "range": "0.892093-0.892093",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/records",
            "value": 0.169482,
            "range": "0.169482-0.169482",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/output-validation",
            "value": 2.947575,
            "range": "2.947575-2.947575",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/findings",
            "value": 0.895835,
            "range": "0.895835-0.895835",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unresolved-addresses",
            "value": 0.086182,
            "range": "0.086182-0.086182",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/detect",
            "value": 0.007081,
            "range": "0.007081-0.007081",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/summary",
            "value": 0.028483,
            "range": "0.028483-0.028483",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/serialising",
            "value": 1.411504,
            "range": "1.411504-1.411504",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unaccounted",
            "value": 0.713921,
            "range": "0.713921-0.713921",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/graph",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 8e086cb7aab88e92c913f3ca926a715c879be434ff2ea8f59b3d7677a6a406a2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/findings",
            "value": 1041849,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 16af8499003462b269135d82ddfce43a20a3fa92be30be18cb3b28d448bbf2b7"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/first",
            "value": 51.862003,
            "range": "51.563205-51.913602",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people. sha256 4a4a24b9c8a052cc60465fffe5da9f34ab71101f3479ebdcc794e61e6d76d7f2, 56150281 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/second",
            "value": 49.309399,
            "range": "49.214797-49.45632",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/profiled",
            "value": 52.74765,
            "range": "52.74765-52.74765",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/first",
            "value": 2552430592,
            "range": "2552430592-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/second",
            "value": 2552430592,
            "range": "2552430592-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/rss",
            "value": 3026268160,
            "range": "2967269376-3082129408",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/records",
            "value": 19728,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/triples",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/findings",
            "value": 198775,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/coding-system-table.rq",
            "value": 0.585304,
            "range": "0.585304-0.585304",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-table.rq",
            "value": 0.051995,
            "range": "0.051995-0.051995",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-table.rq",
            "value": 0.073058,
            "range": "0.073058-0.073058",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-table.rq",
            "value": 0.060359,
            "range": "0.060359-0.060359",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document-table.rq",
            "value": 0.030987,
            "range": "0.030987-0.030987",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-table.rq",
            "value": 0.083407,
            "range": "0.083407-0.083407",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-table.rq",
            "value": 0.034681,
            "range": "0.034681-0.034681",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-table.rq",
            "value": 0.034406,
            "range": "0.034406-0.034406",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reasons.rq",
            "value": 0.479559,
            "range": "0.479559-0.479559",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/allergy-intolerance.rq",
            "value": 0.070213,
            "range": "0.070213-0.070213",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/attachments.rq",
            "value": 0.098074,
            "range": "0.098074-0.098074",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/condition.rq",
            "value": 0.093305,
            "range": "0.093305-0.093305",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/immunization.rq",
            "value": 0.063832,
            "range": "0.063832-0.063832",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-codes.rq",
            "value": 0.334473,
            "range": "0.334473-0.334473",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-identifiers.rq",
            "value": 0.093545,
            "range": "0.093545-0.093545",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-performer.rq",
            "value": 0.023185,
            "range": "0.023185-0.023185",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-quantities.rq",
            "value": 0.301211,
            "range": "0.301211-0.301211",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result.rq",
            "value": 0.39063,
            "range": "0.39063-0.39063",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription.rq",
            "value": 0.074856,
            "range": "0.074856-0.074856",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense.rq",
            "value": 0.048063,
            "range": "0.048063-0.048063",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-supply-and-dosages.rq",
            "value": 0.070805,
            "range": "0.070805-0.070805",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication.rq",
            "value": 0.104146,
            "range": "0.104146-0.104146",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-text.rq",
            "value": 0.327045,
            "range": "0.327045-0.327045",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document.rq",
            "value": 0.097451,
            "range": "0.097451-0.097451",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-from-server.rq",
            "value": 0.033801,
            "range": "0.033801-0.033801",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization.rq",
            "value": 0.081177,
            "range": "0.081177-0.081177",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient.rq",
            "value": 0.051432,
            "range": "0.051432-0.051432",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/procedure.rq",
            "value": 0.14548,
            "range": "0.14548-0.14548",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/record.rq",
            "value": 1.570003,
            "range": "1.570003-1.570003",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-performer.rq",
            "value": 0.024786,
            "range": "0.024786-0.024786",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-results.rq",
            "value": 0.291772,
            "range": "0.291772-0.291772",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report.rq",
            "value": 0.192498,
            "range": "0.192498-0.192498",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation.rq",
            "value": 0.063833,
            "range": "0.063833-0.063833",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant.rq",
            "value": 0.056663,
            "range": "0.056663-0.056663",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reason-findings.rq",
            "value": 0.239424,
            "range": "0.239424-0.239424",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/category-text-findings.rq",
            "value": 0.083449,
            "range": "0.083449-0.083449",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/code-findings.rq",
            "value": 0.089814,
            "range": "0.089814-0.089814",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/date-findings.rq",
            "value": 0.232545,
            "range": "0.232545-0.232545",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-version-findings.rq",
            "value": 0.008914,
            "range": "0.008914-0.008914",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-findings.rq",
            "value": 0.484517,
            "range": "0.484517-0.484517",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-findings.rq",
            "value": 0.051186,
            "range": "0.051186-0.051186",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.065782,
            "range": "0.065782-0.065782",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-findings.rq",
            "value": 0.778552,
            "range": "0.778552-0.778552",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-findings.rq",
            "value": 0.047865,
            "range": "0.047865-0.047865",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-component-findings.rq",
            "value": 0.150532,
            "range": "0.150532-0.150532",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-findings.rq",
            "value": 0.298789,
            "range": "0.298789-0.298789",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-findings.rq",
            "value": 0.050905,
            "range": "0.050905-0.050905",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-findings.rq",
            "value": 0.045811,
            "range": "0.045811-0.045811",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-reference-findings.rq",
            "value": 0.253894,
            "range": "0.253894-0.253894",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/recorded-date-findings.rq",
            "value": 0.058433,
            "range": "0.058433-0.058433",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-display-findings.rq",
            "value": 0.236503,
            "range": "0.236503-0.236503",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-without-server-findings.rq",
            "value": 0.098004,
            "range": "0.098004-0.098004",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/repeated-id-findings.rq",
            "value": 0.126558,
            "range": "0.126558-0.126558",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-findings.rq",
            "value": 0.100093,
            "range": "0.100093-0.100093",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-result-findings.rq",
            "value": 0.134951,
            "range": "0.134951-0.134951",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/resource-type-findings.rq",
            "value": 0.092021,
            "range": "0.092021-0.092021",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-findings.rq",
            "value": 0.101289,
            "range": "0.101289-0.101289",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-findings.rq",
            "value": 0.06357,
            "range": "0.06357-0.06357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/detect.rq",
            "value": 0.007161,
            "range": "0.007161-0.007161",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/document-table",
            "value": 1.360838,
            "range": "1.360838-1.360838",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/lift",
            "value": 4.601275,
            "range": "4.601275-4.601275",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/source-validation",
            "value": 8.69387,
            "range": "8.69387-8.69387",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/accounting",
            "value": 1.518543,
            "range": "1.518543-1.518543",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/dataset",
            "value": 0.069231,
            "range": "0.069231-0.069231",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/index",
            "value": 2.294993,
            "range": "2.294993-2.294993",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/mapping",
            "value": 5.374663,
            "range": "5.374663-5.374663",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/records",
            "value": 1.114163,
            "range": "1.114163-1.114163",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/output-validation",
            "value": 15.049572,
            "range": "15.049572-15.049572",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/findings",
            "value": 5.148983,
            "range": "5.148983-5.148983",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unresolved-addresses",
            "value": 0.281478,
            "range": "0.281478-0.281478",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/detect",
            "value": 0.007315,
            "range": "0.007315-0.007315",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/summary",
            "value": 0.113501,
            "range": "0.113501-0.113501",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/serialising",
            "value": 4.284953,
            "range": "4.284953-4.284953",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unaccounted",
            "value": 2.834271,
            "range": "2.834271-2.834271",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/graph",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 5241acfb6f7cb6de9f7a1d1e19b5c9196c248ef9cd96d821dd26d0b158ad15b4"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/findings",
            "value": 3011148,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 9de40e54a3ada526d408a98ee9cc21153fe48c9ae091f3502213adb8f892a2b2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/first",
            "value": 16.576024,
            "range": "16.4523-16.736764",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people. sha256 843940715d3b2edbdc883697a79ebf312a7754df290d28b0cd89e228549fa678, 19009113 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/second",
            "value": 15.68614,
            "range": "15.627692-15.943196",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/profiled",
            "value": 16.733901,
            "range": "16.733901-16.733901",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/first",
            "value": 723714048,
            "range": "706936832-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/second",
            "value": 723714048,
            "range": "706936832-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/rss",
            "value": 1117863936,
            "range": "1094029312-1127538688",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/records",
            "value": 6223,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/triples",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/findings",
            "value": 72909,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/coding-system-table.rq",
            "value": 0.207156,
            "range": "0.207156-0.207156",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-table.rq",
            "value": 0.017257,
            "range": "0.017257-0.017257",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-table.rq",
            "value": 0.022275,
            "range": "0.022275-0.022275",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-table.rq",
            "value": 0.020752,
            "range": "0.020752-0.020752",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document-table.rq",
            "value": 0.010282,
            "range": "0.010282-0.010282",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-table.rq",
            "value": 0.027104,
            "range": "0.027104-0.027104",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-table.rq",
            "value": 0.01222,
            "range": "0.01222-0.01222",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-table.rq",
            "value": 0.011091,
            "range": "0.011091-0.011091",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reasons.rq",
            "value": 0.15246,
            "range": "0.15246-0.15246",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/allergy-intolerance.rq",
            "value": 0.023518,
            "range": "0.023518-0.023518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/attachments.rq",
            "value": 0.033398,
            "range": "0.033398-0.033398",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/condition.rq",
            "value": 0.035034,
            "range": "0.035034-0.035034",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/immunization.rq",
            "value": 0.023172,
            "range": "0.023172-0.023172",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-codes.rq",
            "value": 0.081397,
            "range": "0.081397-0.081397",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-identifiers.rq",
            "value": 0.026615,
            "range": "0.026615-0.026615",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-performer.rq",
            "value": 0.007119,
            "range": "0.007119-0.007119",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-quantities.rq",
            "value": 0.077817,
            "range": "0.077817-0.077817",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result.rq",
            "value": 0.097594,
            "range": "0.097594-0.097594",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription.rq",
            "value": 0.022688,
            "range": "0.022688-0.022688",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense.rq",
            "value": 0.015028,
            "range": "0.015028-0.015028",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-supply-and-dosages.rq",
            "value": 0.027154,
            "range": "0.027154-0.027154",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication.rq",
            "value": 0.028411,
            "range": "0.028411-0.028411",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-text.rq",
            "value": 0.11041,
            "range": "0.11041-0.11041",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document.rq",
            "value": 0.036216,
            "range": "0.036216-0.036216",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-from-server.rq",
            "value": 0.010432,
            "range": "0.010432-0.010432",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization.rq",
            "value": 0.025891,
            "range": "0.025891-0.025891",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient.rq",
            "value": 0.016084,
            "range": "0.016084-0.016084",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/procedure.rq",
            "value": 0.048274,
            "range": "0.048274-0.048274",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/record.rq",
            "value": 0.447369,
            "range": "0.447369-0.447369",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-performer.rq",
            "value": 0.007286,
            "range": "0.007286-0.007286",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-results.rq",
            "value": 0.076565,
            "range": "0.076565-0.076565",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report.rq",
            "value": 0.061766,
            "range": "0.061766-0.061766",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation.rq",
            "value": 0.019668,
            "range": "0.019668-0.019668",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant.rq",
            "value": 0.016977,
            "range": "0.016977-0.016977",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reason-findings.rq",
            "value": 0.06877,
            "range": "0.06877-0.06877",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/category-text-findings.rq",
            "value": 0.026818,
            "range": "0.026818-0.026818",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/code-findings.rq",
            "value": 0.030013,
            "range": "0.030013-0.030013",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/date-findings.rq",
            "value": 0.068961,
            "range": "0.068961-0.068961",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-version-findings.rq",
            "value": 0.003622,
            "range": "0.003622-0.003622",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-findings.rq",
            "value": 0.119554,
            "range": "0.119554-0.119554",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-findings.rq",
            "value": 0.016899,
            "range": "0.016899-0.016899",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.020447,
            "range": "0.020447-0.020447",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-findings.rq",
            "value": 0.235193,
            "range": "0.235193-0.235193",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-findings.rq",
            "value": 0.015493,
            "range": "0.015493-0.015493",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-component-findings.rq",
            "value": 0.048507,
            "range": "0.048507-0.048507",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-findings.rq",
            "value": 0.082093,
            "range": "0.082093-0.082093",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-findings.rq",
            "value": 0.015748,
            "range": "0.015748-0.015748",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-findings.rq",
            "value": 0.014437,
            "range": "0.014437-0.014437",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-reference-findings.rq",
            "value": 0.074926,
            "range": "0.074926-0.074926",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/recorded-date-findings.rq",
            "value": 0.018648,
            "range": "0.018648-0.018648",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-display-findings.rq",
            "value": 0.071042,
            "range": "0.071042-0.071042",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-without-server-findings.rq",
            "value": 0.030372,
            "range": "0.030372-0.030372",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/repeated-id-findings.rq",
            "value": 0.035009,
            "range": "0.035009-0.035009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-findings.rq",
            "value": 0.034541,
            "range": "0.034541-0.034541",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-result-findings.rq",
            "value": 0.038207,
            "range": "0.038207-0.038207",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/resource-type-findings.rq",
            "value": 0.028625,
            "range": "0.028625-0.028625",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-findings.rq",
            "value": 0.030385,
            "range": "0.030385-0.030385",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-findings.rq",
            "value": 0.01969,
            "range": "0.01969-0.01969",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/detect.rq",
            "value": 0.00712,
            "range": "0.00712-0.00712",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/document-table",
            "value": 0.465211,
            "range": "0.465211-0.465211",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/lift",
            "value": 1.553634,
            "range": "1.553634-1.553634",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/source-validation",
            "value": 2.763447,
            "range": "2.763447-2.763447",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/accounting",
            "value": 0.554661,
            "range": "0.554661-0.554661",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/dataset",
            "value": 0.022346,
            "range": "0.022346-0.022346",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/index",
            "value": 0.720029,
            "range": "0.720029-0.720029",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/mapping",
            "value": 1.587777,
            "range": "1.587777-1.587777",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/records",
            "value": 0.304119,
            "range": "0.304119-0.304119",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/output-validation",
            "value": 4.576995,
            "range": "4.576995-4.576995",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/findings",
            "value": 1.555485,
            "range": "1.555485-1.555485",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unresolved-addresses",
            "value": 0.095238,
            "range": "0.095238-0.095238",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/detect",
            "value": 0.007255,
            "range": "0.007255-0.007255",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/summary",
            "value": 0.036879,
            "range": "0.036879-0.036879",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/serialising",
            "value": 1.607193,
            "range": "1.607193-1.607193",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unaccounted",
            "value": 0.883632,
            "range": "0.883632-0.883632",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/graph",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4a0efd931e29be8bc7f18e54577b1a79251cdec785961503cfb14c2add98830d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/findings",
            "value": 1105859,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 e2390f83b5b1732a36a59e3e296df199c0085c7e875099be9d3dc489ee652832"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.666588,
            "range": "0.645711-0.688402",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.00974,
            "range": "0.007945-0.016313",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.656881,
            "range": "0.636664-0.679321",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.00347,
            "range": "0.003106-0.004105",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.016692,
            "range": "0.015711-0.024779",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001115,
            "range": "0.000989-0.006146",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "15621eef1b6e4578c254871490838e45939a8487",
          "message": "Merge pull request #77 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T21:50:16Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-fhir-r4/commit/15621eef1b6e4578c254871490838e45939a8487"
        },
        "date": 1795531420446,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fhir-r4-lab-pull-3000/convert/first",
            "value": 7.951386,
            "range": "7.913593-7.969718",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. A pull of 3,000 lab results in one FHIR R4 searchset Bundle. sha256 69b4daac45fd32449b8c290be9a7551566b537a6171218e8125169e94ca5882b, 2760035 bytes"
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/second",
            "value": 7.436138,
            "range": "7.401874-7.493362",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-lab-pull-3000/convert/profiled",
            "value": 7.979899,
            "range": "7.979899-7.979899",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/rss",
            "value": 421793792,
            "range": "377372672-431595520",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-lab-pull-3000/records",
            "value": 3004,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. A pull of 3,000 lab results in one FHIR R4 searchset Bundle."
          },
          {
            "name": "fhir-r4-lab-pull-3000/triples",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/findings",
            "value": 3006,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-lab-pull-3000/fallbacks",
            "value": 0,
            "unit": "{count}",
            "extra": "Record executions the general evaluator answered because a query was not compiled or a compiled plan gave up. The detect query, which runs once, is not counted."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/coding-system-table.rq",
            "value": 0.07945,
            "range": "0.07945-0.07945",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-table.rq",
            "value": 0.012359,
            "range": "0.012359-0.012359",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-table.rq",
            "value": 0.025342,
            "range": "0.025342-0.025342",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-table.rq",
            "value": 0.013434,
            "range": "0.013434-0.013434",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document-table.rq",
            "value": 0.00732,
            "range": "0.00732-0.00732",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-table.rq",
            "value": 0.024289,
            "range": "0.024289-0.024289",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-table.rq",
            "value": 0.010623,
            "range": "0.010623-0.010623",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-table.rq",
            "value": 0.011456,
            "range": "0.011456-0.011456",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reasons.rq",
            "value": 0.06818,
            "range": "0.06818-0.06818",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/allergy-intolerance.rq",
            "value": 0.01119,
            "range": "0.01119-0.01119",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/attachments.rq",
            "value": 0.011852,
            "range": "0.011852-0.011852",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/condition.rq",
            "value": 0.009702,
            "range": "0.009702-0.009702",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/immunization.rq",
            "value": 0.008997,
            "range": "0.008997-0.008997",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-codes.rq",
            "value": 0.1117,
            "range": "0.1117-0.1117",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-identifiers.rq",
            "value": 0.026523,
            "range": "0.026523-0.026523",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-performer.rq",
            "value": 0.004184,
            "range": "0.004184-0.004184",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-quantities.rq",
            "value": 0.125742,
            "range": "0.125742-0.125742",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result.rq",
            "value": 0.13347,
            "range": "0.13347-0.13347",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription.rq",
            "value": 0.013942,
            "range": "0.013942-0.013942",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense.rq",
            "value": 0.008621,
            "range": "0.008621-0.008621",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-supply-and-dosages.rq",
            "value": 0.010739,
            "range": "0.010739-0.010739",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication.rq",
            "value": 0.010311,
            "range": "0.010311-0.010311",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-text.rq",
            "value": 0.035339,
            "range": "0.035339-0.035339",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/note-or-document.rq",
            "value": 0.008815,
            "range": "0.008815-0.008815",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-from-server.rq",
            "value": 0.005924,
            "range": "0.005924-0.005924",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization.rq",
            "value": 0.014233,
            "range": "0.014233-0.014233",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient.rq",
            "value": 0.009228,
            "range": "0.009228-0.009228",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/procedure.rq",
            "value": 0.008245,
            "range": "0.008245-0.008245",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/record.rq",
            "value": 0.331086,
            "range": "0.331086-0.331086",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-performer.rq",
            "value": 0.00477,
            "range": "0.00477-0.00477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-results.rq",
            "value": 0.012916,
            "range": "0.012916-0.012916",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report.rq",
            "value": 0.008927,
            "range": "0.008927-0.008927",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation.rq",
            "value": 0.012265,
            "range": "0.012265-0.012265",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant.rq",
            "value": 0.010752,
            "range": "0.010752-0.010752",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/absent-reason-findings.rq",
            "value": 0.045563,
            "range": "0.045563-0.045563",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/category-text-findings.rq",
            "value": 0.014391,
            "range": "0.014391-0.014391",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/code-findings.rq",
            "value": 0.009856,
            "range": "0.009856-0.009856",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/date-findings.rq",
            "value": 0.046003,
            "range": "0.046003-0.046003",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/document-version-findings.rq",
            "value": 0.00167,
            "range": "0.00167-0.00167",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/lab-result-findings.rq",
            "value": 0.089022,
            "range": "0.089022-0.089022",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-findings.rq",
            "value": 0.010463,
            "range": "0.010463-0.010463",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.011966,
            "range": "0.011966-0.011966",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/medication-findings.rq",
            "value": 0.074932,
            "range": "0.074932-0.074932",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/narrative-findings.rq",
            "value": 0.007695,
            "range": "0.007695-0.007695",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-component-findings.rq",
            "value": 0.011653,
            "range": "0.011653-0.011653",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/observation-findings.rq",
            "value": 0.073449,
            "range": "0.073449-0.073449",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/organization-findings.rq",
            "value": 0.009555,
            "range": "0.009555-0.009555",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-findings.rq",
            "value": 0.009192,
            "range": "0.009192-0.009192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/patient-reference-findings.rq",
            "value": 0.059329,
            "range": "0.059329-0.059329",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/recorded-date-findings.rq",
            "value": 0.010592,
            "range": "0.010592-0.010592",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-display-findings.rq",
            "value": 0.039839,
            "range": "0.039839-0.039839",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/reference-without-server-findings.rq",
            "value": 0.046364,
            "range": "0.046364-0.046364",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/repeated-id-findings.rq",
            "value": 0.028471,
            "range": "0.028471-0.028471",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-and-note-findings.rq",
            "value": 0.013256,
            "range": "0.013256-0.013256",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/report-result-findings.rq",
            "value": 0.012503,
            "range": "0.012503-0.012503",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/resource-type-findings.rq",
            "value": 0.011902,
            "range": "0.011902-0.011902",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-findings.rq",
            "value": 0.02195,
            "range": "0.02195-0.02195",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/variant-interpretation-findings.rq",
            "value": 0.013102,
            "range": "0.013102-0.013102",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/query-time/detect.rq",
            "value": 0.009616,
            "range": "0.009616-0.009616",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/document-table",
            "value": 0.233738,
            "range": "0.233738-0.233738",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/lift",
            "value": 0.453045,
            "range": "0.453045-0.453045",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/source-validation",
            "value": 1.204045,
            "range": "1.204045-1.204045",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/accounting",
            "value": 0.016179,
            "range": "0.016179-0.016179",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/dataset",
            "value": 0.011273,
            "range": "0.011273-0.011273",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/index",
            "value": 0.240283,
            "range": "0.240283-0.240283",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/mapping",
            "value": 1.056375,
            "range": "1.056375-1.056375",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/records",
            "value": 0.256288,
            "range": "0.256288-0.256288",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/output-validation",
            "value": 3.124421,
            "range": "3.124421-3.124421",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/findings",
            "value": 0.905375,
            "range": "0.905375-0.905375",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unresolved-addresses",
            "value": 0.039748,
            "range": "0.039748-0.039748",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/detect",
            "value": 0.009688,
            "range": "0.009688-0.009688",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/summary",
            "value": 0.017019,
            "range": "0.017019-0.017019",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/serialising",
            "value": 0.166105,
            "range": "0.166105-0.166105",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-lab-pull-3000/stage/unaccounted",
            "value": 0.246316,
            "range": "0.246316-0.246316",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/graph",
            "value": 63025,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 37ddd3ff45eedcca686486482a5dd0ea90120d791c04352fb96a41e20d5fe7ac"
          },
          {
            "name": "fhir-r4-lab-pull-3000/output/findings",
            "value": 45090,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 21239a39a4729ba969bd423ee6088a728e8605fcfbcd31a1c9d285695c6251e5"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/first",
            "value": 2.59067,
            "range": "2.581828-2.592069",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle. sha256 2703dc1e7e920fa1e45d16c58f8338ef13b3cc1916ee40ffa461112d54dce5de, 1098812 bytes"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/second",
            "value": 2.281616,
            "range": "2.275622-2.281983",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/convert/profiled",
            "value": 2.63382,
            "range": "2.63382-2.63382",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/first",
            "value": 86179840,
            "range": "86179840-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/wasm-memory/second",
            "value": 86179840,
            "range": "86179840-86179840",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/rss",
            "value": 373563392,
            "range": "370614272-378527744",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/records",
            "value": 647,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The trimmed ten-year Synthea record of the demo hospitals, as a FHIR R4 Bundle."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/triples",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/findings",
            "value": 2256,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/coding-system-table.rq",
            "value": 0.025594,
            "range": "0.025594-0.025594",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-table.rq",
            "value": 0.004066,
            "range": "0.004066-0.004066",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-table.rq",
            "value": 0.005869,
            "range": "0.005869-0.005869",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-table.rq",
            "value": 0.003863,
            "range": "0.003863-0.003863",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document-table.rq",
            "value": 0.002088,
            "range": "0.002088-0.002088",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-table.rq",
            "value": 0.006004,
            "range": "0.006004-0.006004",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-table.rq",
            "value": 0.00272,
            "range": "0.00272-0.00272",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-table.rq",
            "value": 0.002885,
            "range": "0.002885-0.002885",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reasons.rq",
            "value": 0.017205,
            "range": "0.017205-0.017205",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/allergy-intolerance.rq",
            "value": 0.003111,
            "range": "0.003111-0.003111",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/attachments.rq",
            "value": 0.002694,
            "range": "0.002694-0.002694",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/condition.rq",
            "value": 0.00717,
            "range": "0.00717-0.00717",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/immunization.rq",
            "value": 0.002453,
            "range": "0.002453-0.002453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-codes.rq",
            "value": 0.016819,
            "range": "0.016819-0.016819",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-identifiers.rq",
            "value": 0.004592,
            "range": "0.004592-0.004592",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-performer.rq",
            "value": 0.001018,
            "range": "0.001018-0.001018",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-quantities.rq",
            "value": 0.017621,
            "range": "0.017621-0.017621",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result.rq",
            "value": 0.021785,
            "range": "0.021785-0.021785",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription.rq",
            "value": 0.003077,
            "range": "0.003077-0.003077",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense.rq",
            "value": 0.00211,
            "range": "0.00211-0.00211",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-supply-and-dosages.rq",
            "value": 0.007854,
            "range": "0.007854-0.007854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication.rq",
            "value": 0.007821,
            "range": "0.007821-0.007821",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-text.rq",
            "value": 0.009589,
            "range": "0.009589-0.009589",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/note-or-document.rq",
            "value": 0.002078,
            "range": "0.002078-0.002078",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-from-server.rq",
            "value": 0.001373,
            "range": "0.001373-0.001373",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization.rq",
            "value": 0.003309,
            "range": "0.003309-0.003309",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient.rq",
            "value": 0.002703,
            "range": "0.002703-0.002703",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/procedure.rq",
            "value": 0.004758,
            "range": "0.004758-0.004758",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/record.rq",
            "value": 0.077468,
            "range": "0.077468-0.077468",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-performer.rq",
            "value": 0.001163,
            "range": "0.001163-0.001163",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-results.rq",
            "value": 0.003111,
            "range": "0.003111-0.003111",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report.rq",
            "value": 0.002143,
            "range": "0.002143-0.002143",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation.rq",
            "value": 0.002708,
            "range": "0.002708-0.002708",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant.rq",
            "value": 0.002405,
            "range": "0.002405-0.002405",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/absent-reason-findings.rq",
            "value": 0.010664,
            "range": "0.010664-0.010664",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/category-text-findings.rq",
            "value": 0.003793,
            "range": "0.003793-0.003793",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/code-findings.rq",
            "value": 0.003188,
            "range": "0.003188-0.003188",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/date-findings.rq",
            "value": 0.014707,
            "range": "0.014707-0.014707",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/document-version-findings.rq",
            "value": 0.00047,
            "range": "0.00047-0.00047",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/lab-result-findings.rq",
            "value": 0.019296,
            "range": "0.019296-0.019296",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-findings.rq",
            "value": 0.002419,
            "range": "0.002419-0.002419",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.002818,
            "range": "0.002818-0.002818",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/medication-findings.rq",
            "value": 0.025556,
            "range": "0.025556-0.025556",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/narrative-findings.rq",
            "value": 0.001936,
            "range": "0.001936-0.001936",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-component-findings.rq",
            "value": 0.002761,
            "range": "0.002761-0.002761",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/observation-findings.rq",
            "value": 0.012584,
            "range": "0.012584-0.012584",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/organization-findings.rq",
            "value": 0.00204,
            "range": "0.00204-0.00204",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-findings.rq",
            "value": 0.001878,
            "range": "0.001878-0.001878",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/patient-reference-findings.rq",
            "value": 0.013817,
            "range": "0.013817-0.013817",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/recorded-date-findings.rq",
            "value": 0.002848,
            "range": "0.002848-0.002848",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-display-findings.rq",
            "value": 0.009665,
            "range": "0.009665-0.009665",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/reference-without-server-findings.rq",
            "value": 0.009835,
            "range": "0.009835-0.009835",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/repeated-id-findings.rq",
            "value": 0.005801,
            "range": "0.005801-0.005801",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-and-note-findings.rq",
            "value": 0.003111,
            "range": "0.003111-0.003111",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/report-result-findings.rq",
            "value": 0.002831,
            "range": "0.002831-0.002831",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/resource-type-findings.rq",
            "value": 0.002844,
            "range": "0.002844-0.002844",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-findings.rq",
            "value": 0.004549,
            "range": "0.004549-0.004549",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/variant-interpretation-findings.rq",
            "value": 0.002765,
            "range": "0.002765-0.002765",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/query-time/detect.rq",
            "value": 0.009547,
            "range": "0.009547-0.009547",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/document-table",
            "value": 0.069077,
            "range": "0.069077-0.069077",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/lift",
            "value": 0.148496,
            "range": "0.148496-0.148496",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/source-validation",
            "value": 0.358969,
            "range": "0.358969-0.358969",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/accounting",
            "value": 0.02646,
            "range": "0.02646-0.02646",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/dataset",
            "value": 0.003219,
            "range": "0.003219-0.003219",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/index",
            "value": 0.082365,
            "range": "0.082365-0.082365",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/mapping",
            "value": 0.237182,
            "range": "0.237182-0.237182",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/records",
            "value": 0.59378,
            "range": "0.59378-0.59378",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/output-validation",
            "value": 0.716357,
            "range": "0.716357-0.716357",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/findings",
            "value": 0.222564,
            "range": "0.222564-0.222564",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unresolved-addresses",
            "value": 0.010997,
            "range": "0.010997-0.010997",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/detect",
            "value": 0.009593,
            "range": "0.009593-0.009593",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/summary",
            "value": 0.005153,
            "range": "0.005153-0.005153",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/serialising",
            "value": 0.06313,
            "range": "0.06313-0.06313",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/stage/unaccounted",
            "value": 0.08648,
            "range": "0.08648-0.08648",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/graph",
            "value": 12654,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7cc449ffbde5128e52fafcf8acfb64362df9b08f54ac053668923208f8175856"
          },
          {
            "name": "fhir-r4-synthea-10y-trimmed/output/findings",
            "value": 33875,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 b652127fa85ae51be3efc3f467bdff274a9e99631bf26d3f1bccb60d4dc5eb7d"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/first",
            "value": 62.040319,
            "range": "61.836495-63.806115",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data. sha256 f20b86408066ece2d25a7b02d380b7652f22d16df9dab613a0c73c9969b17da8, 51227791 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/second",
            "value": 58.267911,
            "range": "57.908513-59.305448",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime/convert/profiled",
            "value": 62.597598,
            "range": "62.597598-62.597598",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/first",
            "value": 2518876160,
            "range": "2200109056-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/wasm-memory/second",
            "value": 2518876160,
            "range": "2200109056-2518876160",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/rss",
            "value": 3315355648,
            "range": "3036393472-3417485312",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime/records",
            "value": 16833,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of one person, Xochitl Corkery, a 51 MB FHIR R4 Bundle of 16,833 entries. With the records of Dona Okuneva and Cole Gaylord it is also one pod of 42,784 entries; the three are unrelated people and Xochitl's is 39% of the pod, so the step from this input to the pod is not independent data."
          },
          {
            "name": "fhir-r4-synthea-lifetime/triples",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/findings",
            "value": 267199,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/coding-system-table.rq",
            "value": 0.651436,
            "range": "0.651436-0.651436",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-table.rq",
            "value": 0.067799,
            "range": "0.067799-0.067799",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-table.rq",
            "value": 0.080219,
            "range": "0.080219-0.080219",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-table.rq",
            "value": 0.101152,
            "range": "0.101152-0.101152",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document-table.rq",
            "value": 0.046615,
            "range": "0.046615-0.046615",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-table.rq",
            "value": 0.116156,
            "range": "0.116156-0.116156",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-table.rq",
            "value": 0.048239,
            "range": "0.048239-0.048239",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-table.rq",
            "value": 0.048857,
            "range": "0.048857-0.048857",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reasons.rq",
            "value": 0.463519,
            "range": "0.463519-0.463519",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/allergy-intolerance.rq",
            "value": 0.071288,
            "range": "0.071288-0.071288",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/attachments.rq",
            "value": 0.109391,
            "range": "0.109391-0.109391",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/condition.rq",
            "value": 0.077946,
            "range": "0.077946-0.077946",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/immunization.rq",
            "value": 0.062379,
            "range": "0.062379-0.062379",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-codes.rq",
            "value": 0.199538,
            "range": "0.199538-0.199538",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-identifiers.rq",
            "value": 0.07908,
            "range": "0.07908-0.07908",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-performer.rq",
            "value": 0.023406,
            "range": "0.023406-0.023406",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-quantities.rq",
            "value": 0.184662,
            "range": "0.184662-0.184662",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result.rq",
            "value": 0.23666,
            "range": "0.23666-0.23666",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription.rq",
            "value": 0.074479,
            "range": "0.074479-0.074479",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense.rq",
            "value": 0.051707,
            "range": "0.051707-0.051707",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-supply-and-dosages.rq",
            "value": 0.083646,
            "range": "0.083646-0.083646",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication.rq",
            "value": 0.128186,
            "range": "0.128186-0.128186",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-text.rq",
            "value": 0.444985,
            "range": "0.444985-0.444985",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/note-or-document.rq",
            "value": 0.145456,
            "range": "0.145456-0.145456",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-from-server.rq",
            "value": 0.035515,
            "range": "0.035515-0.035515",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization.rq",
            "value": 0.085609,
            "range": "0.085609-0.085609",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient.rq",
            "value": 0.054083,
            "range": "0.054083-0.054083",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/procedure.rq",
            "value": 0.146809,
            "range": "0.146809-0.146809",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/record.rq",
            "value": 1.24507,
            "range": "1.24507-1.24507",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-performer.rq",
            "value": 0.02541,
            "range": "0.02541-0.02541",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-results.rq",
            "value": 0.20245,
            "range": "0.20245-0.20245",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report.rq",
            "value": 0.196604,
            "range": "0.196604-0.196604",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation.rq",
            "value": 0.067713,
            "range": "0.067713-0.067713",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant.rq",
            "value": 0.060301,
            "range": "0.060301-0.060301",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/absent-reason-findings.rq",
            "value": 0.217438,
            "range": "0.217438-0.217438",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/category-text-findings.rq",
            "value": 0.092101,
            "range": "0.092101-0.092101",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/code-findings.rq",
            "value": 0.099479,
            "range": "0.099479-0.099479",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/date-findings.rq",
            "value": 0.186422,
            "range": "0.186422-0.186422",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/document-version-findings.rq",
            "value": 0.008909,
            "range": "0.008909-0.008909",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/lab-result-findings.rq",
            "value": 0.282334,
            "range": "0.282334-0.282334",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-findings.rq",
            "value": 0.056126,
            "range": "0.056126-0.056126",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.069005,
            "range": "0.069005-0.069005",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/medication-findings.rq",
            "value": 0.718028,
            "range": "0.718028-0.718028",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/narrative-findings.rq",
            "value": 0.050549,
            "range": "0.050549-0.050549",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-component-findings.rq",
            "value": 0.096442,
            "range": "0.096442-0.096442",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/observation-findings.rq",
            "value": 0.207783,
            "range": "0.207783-0.207783",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/organization-findings.rq",
            "value": 0.053164,
            "range": "0.053164-0.053164",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-findings.rq",
            "value": 0.049982,
            "range": "0.049982-0.049982",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/patient-reference-findings.rq",
            "value": 0.196975,
            "range": "0.196975-0.196975",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/recorded-date-findings.rq",
            "value": 0.061972,
            "range": "0.061972-0.061972",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-display-findings.rq",
            "value": 0.239719,
            "range": "0.239719-0.239719",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/reference-without-server-findings.rq",
            "value": 0.103855,
            "range": "0.103855-0.103855",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/repeated-id-findings.rq",
            "value": 0.098634,
            "range": "0.098634-0.098634",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-and-note-findings.rq",
            "value": 0.12407,
            "range": "0.12407-0.12407",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/report-result-findings.rq",
            "value": 0.106759,
            "range": "0.106759-0.106759",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/resource-type-findings.rq",
            "value": 0.904569,
            "range": "0.904569-0.904569",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-findings.rq",
            "value": 0.096653,
            "range": "0.096653-0.096653",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/variant-interpretation-findings.rq",
            "value": 0.07,
            "range": "0.07-0.07",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/query-time/detect.rq",
            "value": 0.009749,
            "range": "0.009749-0.009749",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/document-table",
            "value": 1.645353,
            "range": "1.645353-1.645353",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/lift",
            "value": 5.377974,
            "range": "5.377974-5.377974",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/source-validation",
            "value": 10.16985,
            "range": "10.16985-10.16985",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/accounting",
            "value": 2.891047,
            "range": "2.891047-2.891047",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/dataset",
            "value": 0.069527,
            "range": "0.069527-0.069527",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/index",
            "value": 2.484948,
            "range": "2.484948-2.484948",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/mapping",
            "value": 4.744265,
            "range": "4.744265-4.744265",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/records",
            "value": 0.91653,
            "range": "0.91653-0.91653",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/output-validation",
            "value": 15.707173,
            "range": "15.707173-15.707173",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/findings",
            "value": 5.541878,
            "range": "5.541878-5.541878",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unresolved-addresses",
            "value": 0.327668,
            "range": "0.327668-0.327668",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/detect",
            "value": 0.009878,
            "range": "0.009878-0.009878",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/summary",
            "value": 0.113067,
            "range": "0.113067-0.113067",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/serialising",
            "value": 7.88831,
            "range": "7.88831-7.88831",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime/stage/unaccounted",
            "value": 4.71013,
            "range": "4.71013-4.71013",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/graph",
            "value": 184332,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 7a293b50f329e9697119ef46a49e0e55365198126021106ead2739fd58656a51"
          },
          {
            "name": "fhir-r4-synthea-lifetime/output/findings",
            "value": 4050084,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4b992f4465adb297491a6571d8108f50b9d23e5375d2b20338ace4af174e227d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/first",
            "value": 15.528153,
            "range": "15.475314-15.532445",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries. sha256 da8b599d1bafbc500fd74a1aded71f6a426dde36edc25b0fd86856595e9ad292, 14900379 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/second",
            "value": 14.085402,
            "range": "14.046175-14.097808",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/convert/profiled",
            "value": 15.660097,
            "range": "15.660097-15.660097",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/first",
            "value": 639827968,
            "range": "589496320-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/wasm-memory/second",
            "value": 639827968,
            "range": "589496320-639827968",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/rss",
            "value": 1068277760,
            "range": "982102016-1080659968",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/records",
            "value": 3987,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Justa Moore, a 15 MB FHIR R4 Bundle of 3,987 entries."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/triples",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/findings",
            "value": 68397,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/coding-system-table.rq",
            "value": 0.212477,
            "range": "0.212477-0.212477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-table.rq",
            "value": 0.017564,
            "range": "0.017564-0.017564",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-table.rq",
            "value": 0.017012,
            "range": "0.017012-0.017012",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-table.rq",
            "value": 0.020822,
            "range": "0.020822-0.020822",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document-table.rq",
            "value": 0.012166,
            "range": "0.012166-0.012166",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-table.rq",
            "value": 0.02808,
            "range": "0.02808-0.02808",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-table.rq",
            "value": 0.011212,
            "range": "0.011212-0.011212",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-table.rq",
            "value": 0.011253,
            "range": "0.011253-0.011253",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reasons.rq",
            "value": 0.117162,
            "range": "0.117162-0.117162",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/allergy-intolerance.rq",
            "value": 0.017879,
            "range": "0.017879-0.017879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/attachments.rq",
            "value": 0.030574,
            "range": "0.030574-0.030574",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/condition.rq",
            "value": 0.025532,
            "range": "0.025532-0.025532",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/immunization.rq",
            "value": 0.017943,
            "range": "0.017943-0.017943",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-codes.rq",
            "value": 0.022924,
            "range": "0.022924-0.022924",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-identifiers.rq",
            "value": 0.014911,
            "range": "0.014911-0.014911",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-performer.rq",
            "value": 0.005578,
            "range": "0.005578-0.005578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-quantities.rq",
            "value": 0.02461,
            "range": "0.02461-0.02461",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result.rq",
            "value": 0.026516,
            "range": "0.026516-0.026516",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription.rq",
            "value": 0.01754,
            "range": "0.01754-0.01754",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense.rq",
            "value": 0.012289,
            "range": "0.012289-0.012289",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-supply-and-dosages.rq",
            "value": 0.016578,
            "range": "0.016578-0.016578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication.rq",
            "value": 0.01796,
            "range": "0.01796-0.01796",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-text.rq",
            "value": 0.112305,
            "range": "0.112305-0.112305",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/note-or-document.rq",
            "value": 0.046179,
            "range": "0.046179-0.046179",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-from-server.rq",
            "value": 0.008503,
            "range": "0.008503-0.008503",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization.rq",
            "value": 0.020764,
            "range": "0.020764-0.020764",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient.rq",
            "value": 0.013393,
            "range": "0.013393-0.013393",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/procedure.rq",
            "value": 0.071525,
            "range": "0.071525-0.071525",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/record.rq",
            "value": 0.277596,
            "range": "0.277596-0.277596",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-performer.rq",
            "value": 0.006312,
            "range": "0.006312-0.006312",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-results.rq",
            "value": 0.028677,
            "range": "0.028677-0.028677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report.rq",
            "value": 0.058443,
            "range": "0.058443-0.058443",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation.rq",
            "value": 0.015523,
            "range": "0.015523-0.015523",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant.rq",
            "value": 0.013861,
            "range": "0.013861-0.013861",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/absent-reason-findings.rq",
            "value": 0.052557,
            "range": "0.052557-0.052557",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/category-text-findings.rq",
            "value": 0.023119,
            "range": "0.023119-0.023119",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/code-findings.rq",
            "value": 0.032857,
            "range": "0.032857-0.032857",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/date-findings.rq",
            "value": 0.042081,
            "range": "0.042081-0.042081",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/document-version-findings.rq",
            "value": 0.002199,
            "range": "0.002199-0.002199",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/lab-result-findings.rq",
            "value": 0.030542,
            "range": "0.030542-0.030542",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-findings.rq",
            "value": 0.013345,
            "range": "0.013345-0.013345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.017012,
            "range": "0.017012-0.017012",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/medication-findings.rq",
            "value": 0.170094,
            "range": "0.170094-0.170094",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/narrative-findings.rq",
            "value": 0.012539,
            "range": "0.012539-0.012539",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-component-findings.rq",
            "value": 0.032206,
            "range": "0.032206-0.032206",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/observation-findings.rq",
            "value": 0.037659,
            "range": "0.037659-0.037659",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/organization-findings.rq",
            "value": 0.012632,
            "range": "0.012632-0.012632",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-findings.rq",
            "value": 0.011774,
            "range": "0.011774-0.011774",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/patient-reference-findings.rq",
            "value": 0.047869,
            "range": "0.047869-0.047869",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/recorded-date-findings.rq",
            "value": 0.014934,
            "range": "0.014934-0.014934",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-display-findings.rq",
            "value": 0.060815,
            "range": "0.060815-0.060815",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/reference-without-server-findings.rq",
            "value": 0.025442,
            "range": "0.025442-0.025442",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/repeated-id-findings.rq",
            "value": 0.022701,
            "range": "0.022701-0.022701",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-and-note-findings.rq",
            "value": 0.035643,
            "range": "0.035643-0.035643",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/report-result-findings.rq",
            "value": 0.021088,
            "range": "0.021088-0.021088",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/resource-type-findings.rq",
            "value": 0.02824,
            "range": "0.02824-0.02824",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-findings.rq",
            "value": 0.02089,
            "range": "0.02089-0.02089",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/variant-interpretation-findings.rq",
            "value": 0.01593,
            "range": "0.01593-0.01593",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/query-time/detect.rq",
            "value": 0.009613,
            "range": "0.009613-0.009613",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/document-table",
            "value": 0.46261,
            "range": "0.46261-0.46261",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/lift",
            "value": 1.575728,
            "range": "1.575728-1.575728",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/source-validation",
            "value": 2.550644,
            "range": "2.550644-2.550644",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/accounting",
            "value": 0.773129,
            "range": "0.773129-0.773129",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/dataset",
            "value": 0.017262,
            "range": "0.017262-0.017262",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/index",
            "value": 0.704154,
            "range": "0.704154-0.704154",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/mapping",
            "value": 1.085383,
            "range": "1.085383-1.085383",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/records",
            "value": 0.202237,
            "range": "0.202237-0.202237",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/output-validation",
            "value": 3.912397,
            "range": "3.912397-3.912397",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/findings",
            "value": 1.123036,
            "range": "1.123036-1.123036",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unresolved-addresses",
            "value": 0.100036,
            "range": "0.100036-0.100036",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/detect",
            "value": 0.009712,
            "range": "0.009712-0.009712",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/summary",
            "value": 0.034434,
            "range": "0.034434-0.034434",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/serialising",
            "value": 1.82677,
            "range": "1.82677-1.82677",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/stage/unaccounted",
            "value": 1.282564,
            "range": "1.282564-1.282564",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/graph",
            "value": 41528,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 8e086cb7aab88e92c913f3ca926a715c879be434ff2ea8f59b3d7677a6a406a2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-ab74ec30/output/findings",
            "value": 1041849,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 16af8499003462b269135d82ddfce43a20a3fa92be30be18cb3b28d448bbf2b7"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/first",
            "value": 67.714658,
            "range": "67.576142-68.035868",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people. sha256 4a4a24b9c8a052cc60465fffe5da9f34ab71101f3479ebdcc794e61e6d76d7f2, 56150281 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/second",
            "value": 63.120008,
            "range": "62.72923-63.440857",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/convert/profiled",
            "value": 67.322874,
            "range": "67.322874-67.322874",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/first",
            "value": 2552430592,
            "range": "2233663488-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/wasm-memory/second",
            "value": 2552430592,
            "range": "2233663488-2552430592",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/rss",
            "value": 3015622656,
            "range": "2769170432-3063365632",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/records",
            "value": 19728,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Dona Okuneva, a 56 MB FHIR R4 Bundle of 19,728 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Cole Gaylord's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/triples",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/findings",
            "value": 198775,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/coding-system-table.rq",
            "value": 0.82381,
            "range": "0.82381-0.82381",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-table.rq",
            "value": 0.076243,
            "range": "0.076243-0.076243",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-table.rq",
            "value": 0.112004,
            "range": "0.112004-0.112004",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-table.rq",
            "value": 0.092893,
            "range": "0.092893-0.092893",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document-table.rq",
            "value": 0.049191,
            "range": "0.049191-0.049191",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-table.rq",
            "value": 0.13567,
            "range": "0.13567-0.13567",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-table.rq",
            "value": 0.060027,
            "range": "0.060027-0.060027",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-table.rq",
            "value": 0.060848,
            "range": "0.060848-0.060848",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reasons.rq",
            "value": 0.517754,
            "range": "0.517754-0.517754",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/allergy-intolerance.rq",
            "value": 0.079612,
            "range": "0.079612-0.079612",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/attachments.rq",
            "value": 0.104498,
            "range": "0.104498-0.104498",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/condition.rq",
            "value": 0.099234,
            "range": "0.099234-0.099234",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/immunization.rq",
            "value": 0.069122,
            "range": "0.069122-0.069122",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-codes.rq",
            "value": 0.367647,
            "range": "0.367647-0.367647",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-identifiers.rq",
            "value": 0.115194,
            "range": "0.115194-0.115194",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-performer.rq",
            "value": 0.027565,
            "range": "0.027565-0.027565",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-quantities.rq",
            "value": 0.321272,
            "range": "0.321272-0.321272",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result.rq",
            "value": 0.4345,
            "range": "0.4345-0.4345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription.rq",
            "value": 0.087982,
            "range": "0.087982-0.087982",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense.rq",
            "value": 0.057878,
            "range": "0.057878-0.057878",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-supply-and-dosages.rq",
            "value": 0.0824,
            "range": "0.0824-0.0824",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication.rq",
            "value": 0.112391,
            "range": "0.112391-0.112391",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-text.rq",
            "value": 0.368518,
            "range": "0.368518-0.368518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/note-or-document.rq",
            "value": 0.11082,
            "range": "0.11082-0.11082",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-from-server.rq",
            "value": 0.039445,
            "range": "0.039445-0.039445",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization.rq",
            "value": 0.097651,
            "range": "0.097651-0.097651",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient.rq",
            "value": 0.061327,
            "range": "0.061327-0.061327",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/procedure.rq",
            "value": 0.158788,
            "range": "0.158788-0.158788",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/record.rq",
            "value": 1.896553,
            "range": "1.896553-1.896553",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-performer.rq",
            "value": 0.030837,
            "range": "0.030837-0.030837",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-results.rq",
            "value": 0.354071,
            "range": "0.354071-0.354071",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report.rq",
            "value": 0.208357,
            "range": "0.208357-0.208357",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation.rq",
            "value": 0.078572,
            "range": "0.078572-0.078572",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant.rq",
            "value": 0.069029,
            "range": "0.069029-0.069029",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/absent-reason-findings.rq",
            "value": 0.276443,
            "range": "0.276443-0.276443",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/category-text-findings.rq",
            "value": 0.105009,
            "range": "0.105009-0.105009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/code-findings.rq",
            "value": 0.106735,
            "range": "0.106735-0.106735",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/date-findings.rq",
            "value": 0.266832,
            "range": "0.266832-0.266832",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/document-version-findings.rq",
            "value": 0.010381,
            "range": "0.010381-0.010381",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/lab-result-findings.rq",
            "value": 0.509893,
            "range": "0.509893-0.509893",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-findings.rq",
            "value": 0.065624,
            "range": "0.065624-0.065624",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.077817,
            "range": "0.077817-0.077817",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/medication-findings.rq",
            "value": 0.913675,
            "range": "0.913675-0.913675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/narrative-findings.rq",
            "value": 0.056422,
            "range": "0.056422-0.056422",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-component-findings.rq",
            "value": 0.190778,
            "range": "0.190778-0.190778",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/observation-findings.rq",
            "value": 0.337108,
            "range": "0.337108-0.337108",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/organization-findings.rq",
            "value": 0.06193,
            "range": "0.06193-0.06193",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-findings.rq",
            "value": 0.056479,
            "range": "0.056479-0.056479",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/patient-reference-findings.rq",
            "value": 0.275444,
            "range": "0.275444-0.275444",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/recorded-date-findings.rq",
            "value": 0.072039,
            "range": "0.072039-0.072039",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-display-findings.rq",
            "value": 0.3061,
            "range": "0.3061-0.3061",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/reference-without-server-findings.rq",
            "value": 0.132463,
            "range": "0.132463-0.132463",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/repeated-id-findings.rq",
            "value": 0.143196,
            "range": "0.143196-0.143196",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-and-note-findings.rq",
            "value": 0.1144,
            "range": "0.1144-0.1144",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/report-result-findings.rq",
            "value": 0.157939,
            "range": "0.157939-0.157939",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/resource-type-findings.rq",
            "value": 0.112865,
            "range": "0.112865-0.112865",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-findings.rq",
            "value": 0.133301,
            "range": "0.133301-0.133301",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/variant-interpretation-findings.rq",
            "value": 0.08054,
            "range": "0.08054-0.08054",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/query-time/detect.rq",
            "value": 0.009592,
            "range": "0.009592-0.009592",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/document-table",
            "value": 1.928189,
            "range": "1.928189-1.928189",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/lift",
            "value": 6.212771,
            "range": "6.212771-6.212771",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/source-validation",
            "value": 11.218213,
            "range": "11.218213-11.218213",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/accounting",
            "value": 2.018039,
            "range": "2.018039-2.018039",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/dataset",
            "value": 0.078534,
            "range": "0.078534-0.078534",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/index",
            "value": 2.837847,
            "range": "2.837847-2.837847",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/mapping",
            "value": 6.178357,
            "range": "6.178357-6.178357",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/records",
            "value": 1.273574,
            "range": "1.273574-1.273574",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/output-validation",
            "value": 19.066848,
            "range": "19.066848-19.066848",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/findings",
            "value": 6.141461,
            "range": "6.141461-6.141461",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unresolved-addresses",
            "value": 0.321946,
            "range": "0.321946-0.321946",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/detect",
            "value": 0.009719,
            "range": "0.009719-0.009719",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/summary",
            "value": 0.116445,
            "range": "0.116445-0.116445",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/serialising",
            "value": 5.101454,
            "range": "5.101454-5.101454",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/stage/unaccounted",
            "value": 4.819478,
            "range": "4.819478-4.819478",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/graph",
            "value": 283762,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 5241acfb6f7cb6de9f7a1d1e19b5c9196c248ef9cd96d821dd26d0b158ad15b4"
          },
          {
            "name": "fhir-r4-synthea-lifetime-3541f47c/output/findings",
            "value": 3011148,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 9de40e54a3ada526d408a98ee9cc21153fe48c9ae091f3502213adb8f892a2b2"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/first",
            "value": 21.546486,
            "range": "21.545861-21.559313",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people. sha256 843940715d3b2edbdc883697a79ebf312a7754df290d28b0cd89e228549fa678, 19009113 bytes"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/second",
            "value": 20.010332,
            "range": "19.95627-20.086218",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/convert/profiled",
            "value": 21.694989,
            "range": "21.694989-21.694989",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/first",
            "value": 723714048,
            "range": "706936832-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/wasm-memory/second",
            "value": 723714048,
            "range": "706936832-723714048",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/rss",
            "value": 1109778432,
            "range": "1062588416-1165336576",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/records",
            "value": 6223,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The lifetime Synthea record of Cole Gaylord, a 19 MB FHIR R4 Bundle of 6,223 entries. It is one of the three records of the pod of 42,784 entries, with Xochitl Corkery's and Dona Okuneva's; the three are unrelated people."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/triples",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/findings",
            "value": 72909,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/coding-system-table.rq",
            "value": 0.292754,
            "range": "0.292754-0.292754",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-table.rq",
            "value": 0.026082,
            "range": "0.026082-0.026082",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-table.rq",
            "value": 0.033047,
            "range": "0.033047-0.033047",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-table.rq",
            "value": 0.030364,
            "range": "0.030364-0.030364",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document-table.rq",
            "value": 0.016467,
            "range": "0.016467-0.016467",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-table.rq",
            "value": 0.042803,
            "range": "0.042803-0.042803",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-table.rq",
            "value": 0.018738,
            "range": "0.018738-0.018738",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-table.rq",
            "value": 0.019098,
            "range": "0.019098-0.019098",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reasons.rq",
            "value": 0.167179,
            "range": "0.167179-0.167179",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/allergy-intolerance.rq",
            "value": 0.025535,
            "range": "0.025535-0.025535",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/attachments.rq",
            "value": 0.03468,
            "range": "0.03468-0.03468",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/condition.rq",
            "value": 0.036147,
            "range": "0.036147-0.036147",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/immunization.rq",
            "value": 0.024223,
            "range": "0.024223-0.024223",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-codes.rq",
            "value": 0.09007,
            "range": "0.09007-0.09007",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-identifiers.rq",
            "value": 0.031696,
            "range": "0.031696-0.031696",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-performer.rq",
            "value": 0.008738,
            "range": "0.008738-0.008738",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-quantities.rq",
            "value": 0.082292,
            "range": "0.082292-0.082292",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result.rq",
            "value": 0.108752,
            "range": "0.108752-0.108752",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription.rq",
            "value": 0.026964,
            "range": "0.026964-0.026964",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense.rq",
            "value": 0.01838,
            "range": "0.01838-0.01838",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-supply-and-dosages.rq",
            "value": 0.031173,
            "range": "0.031173-0.031173",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication.rq",
            "value": 0.032703,
            "range": "0.032703-0.032703",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-text.rq",
            "value": 0.12091,
            "range": "0.12091-0.12091",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/note-or-document.rq",
            "value": 0.040937,
            "range": "0.040937-0.040937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-from-server.rq",
            "value": 0.012309,
            "range": "0.012309-0.012309",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization.rq",
            "value": 0.031142,
            "range": "0.031142-0.031142",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient.rq",
            "value": 0.019739,
            "range": "0.019739-0.019739",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/procedure.rq",
            "value": 0.053467,
            "range": "0.053467-0.053467",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/record.rq",
            "value": 0.555732,
            "range": "0.555732-0.555732",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-performer.rq",
            "value": 0.009512,
            "range": "0.009512-0.009512",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-results.rq",
            "value": 0.095284,
            "range": "0.095284-0.095284",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report.rq",
            "value": 0.068931,
            "range": "0.068931-0.068931",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation.rq",
            "value": 0.024335,
            "range": "0.024335-0.024335",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant.rq",
            "value": 0.0215,
            "range": "0.0215-0.0215",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/absent-reason-findings.rq",
            "value": 0.084753,
            "range": "0.084753-0.084753",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/category-text-findings.rq",
            "value": 0.032712,
            "range": "0.032712-0.032712",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/code-findings.rq",
            "value": 0.036439,
            "range": "0.036439-0.036439",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/date-findings.rq",
            "value": 0.079026,
            "range": "0.079026-0.079026",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/document-version-findings.rq",
            "value": 0.004017,
            "range": "0.004017-0.004017",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/lab-result-findings.rq",
            "value": 0.127785,
            "range": "0.127785-0.127785",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-findings.rq",
            "value": 0.02044,
            "range": "0.02044-0.02044",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-dispense-prescription-findings.rq",
            "value": 0.024999,
            "range": "0.024999-0.024999",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/medication-findings.rq",
            "value": 0.276174,
            "range": "0.276174-0.276174",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/narrative-findings.rq",
            "value": 0.01868,
            "range": "0.01868-0.01868",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-component-findings.rq",
            "value": 0.062337,
            "range": "0.062337-0.062337",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/observation-findings.rq",
            "value": 0.093822,
            "range": "0.093822-0.093822",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/organization-findings.rq",
            "value": 0.019766,
            "range": "0.019766-0.019766",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-findings.rq",
            "value": 0.017807,
            "range": "0.017807-0.017807",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/patient-reference-findings.rq",
            "value": 0.085358,
            "range": "0.085358-0.085358",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/recorded-date-findings.rq",
            "value": 0.023139,
            "range": "0.023139-0.023139",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-display-findings.rq",
            "value": 0.093909,
            "range": "0.093909-0.093909",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/reference-without-server-findings.rq",
            "value": 0.040926,
            "range": "0.040926-0.040926",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/repeated-id-findings.rq",
            "value": 0.040608,
            "range": "0.040608-0.040608",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-and-note-findings.rq",
            "value": 0.038341,
            "range": "0.038341-0.038341",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/report-result-findings.rq",
            "value": 0.045626,
            "range": "0.045626-0.045626",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/resource-type-findings.rq",
            "value": 0.037398,
            "range": "0.037398-0.037398",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-findings.rq",
            "value": 0.039363,
            "range": "0.039363-0.039363",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/variant-interpretation-findings.rq",
            "value": 0.025034,
            "range": "0.025034-0.025034",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/query-time/detect.rq",
            "value": 0.009632,
            "range": "0.009632-0.009632",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/document-table",
            "value": 0.65488,
            "range": "0.65488-0.65488",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/lift",
            "value": 2.108205,
            "range": "2.108205-2.108205",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/source-validation",
            "value": 3.614089,
            "range": "3.614089-3.614089",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/accounting",
            "value": 0.760175,
            "range": "0.760175-0.760175",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/dataset",
            "value": 0.025976,
            "range": "0.025976-0.025976",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/index",
            "value": 0.935566,
            "range": "0.935566-0.935566",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/mapping",
            "value": 1.843167,
            "range": "1.843167-1.843167",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/records",
            "value": 0.352783,
            "range": "0.352783-0.352783",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/output-validation",
            "value": 5.863807,
            "range": "5.863807-5.863807",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/findings",
            "value": 1.884904,
            "range": "1.884904-1.884904",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unresolved-addresses",
            "value": 0.112886,
            "range": "0.112886-0.112886",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/detect",
            "value": 0.009711,
            "range": "0.009711-0.009711",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/summary",
            "value": 0.039322,
            "range": "0.039322-0.039322",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/serialising",
            "value": 1.946218,
            "range": "1.946218-1.946218",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/stage/unaccounted",
            "value": 1.543301,
            "range": "1.543301-1.543301",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/graph",
            "value": 79183,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4a0efd931e29be8bc7f18e54577b1a79251cdec785961503cfb14c2add98830d"
          },
          {
            "name": "fhir-r4-synthea-lifetime-4f159b52/output/findings",
            "value": 1105859,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 e2390f83b5b1732a36a59e3e296df199c0085c7e875099be9d3dc489ee652832"
          },
          {
            "name": "fhir-r4/load",
            "value": 0.950073,
            "range": "0.924423-1.011765",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "fhir-r4/load/read-files",
            "value": 0.014638,
            "range": "0.011224-0.019415",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "fhir-r4/load/prepare",
            "value": 0.936625,
            "range": "0.911864-0.996115",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "fhir-r4/boot/read-wasm",
            "value": 0.007605,
            "range": "0.00742-0.007978",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "fhir-r4/boot/compile-wasm",
            "value": 0.021786,
            "range": "0.021349-0.024888",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "fhir-r4/boot/instantiate-wasm",
            "value": 0.001665,
            "range": "0.001404-0.003467",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      }
    ]
  }
}