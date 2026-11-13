"""Export saved Excel values for the portfolio's CSV table viewer.

Run with Python and openpyxl. Original workbooks are read only; regenerate
these previews when the submitted workbooks change.
"""

import csv
import io
import json
from pathlib import Path
import xml.etree.ElementTree as ET
from zipfile import ZipFile

import openpyxl


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public/activities/4th-year-finals"
WORKBOOKS = {
    "PTF2_BERNARDO_Experiment_Results": {
        "Table A": 5, "Table B": 1, "Table C": 1,
        "Question Metrics": 1, "Evidence": 1,
    },
    "WW-F1F2_DecisionThree_RAG_Results": {
        "Results": 6, "Raw Responses": 5, "Trial Log": 5,
        "Answer Review": 5, "Retrieved Evidence": 5, "Questions": 5,
        "Source Evidence": 5, "Methods": 5,
    },
    "PF1_DecisionThree_Final_Evaluation": {
        "Results": 6, "Evaluation": 4, "Elements": 4, "Evidence": 4,
        "Benchmarks": 4, "Measurements": 4, "TrialLog": 4,
        "Setup": 4, "Methods": 4,
    },
}


def quote(value):
    return json.dumps(value, ensure_ascii=False)


source_path = ROOT / "src/data/activities.ts"
source = source_path.read_text(encoding="utf-8")
for stem, headers in WORKBOOKS.items():
    workbook = openpyxl.load_workbook(ASSETS / f"{stem}.xlsx", data_only=True)
    assert workbook.sheetnames == list(headers), f"Worksheet list changed: {stem}"
    sheets = []
    for name, header_row in headers.items():
        sheet = workbook[name]
        # Empty string caches are valid; missing numeric caches are not.
        with ZipFile(ASSETS / f"{stem}.xlsx") as archive:
            xml = ET.fromstring(archive.read(f"xl/worksheets/sheet{workbook.sheetnames.index(name) + 1}.xml"))
        namespace = {"s": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
        for cell in xml.findall(".//s:c", namespace):
            if cell.find("s:f", namespace) is not None:
                cache = cell.find("s:v", namespace)
                if cache is None or (cache.text is None and cell.get("t") != "str"):
                    raise ValueError(f"Missing saved formula value: {stem}/{name}/{cell.get('r')}")
        filename = f"{stem}_{name.replace(' ', '_')}.csv"
        rows = list(sheet.values)
        description = "\n".join(
            " ".join(str(value) for value in row if value is not None)
            for row in rows[:header_row - 1] if any(value is not None for value in row)
        )
        output = io.StringIO(newline="")
        writer = csv.writer(output)
        writer.writerows(rows[header_row - 1:])
        text = output.getvalue()
        with (ASSETS / filename).open("w", encoding="utf-8", newline="") as file:
            file.write(text)
        assert list(csv.reader(io.StringIO(text))) == [
            ["" if value is None else str(value) for value in row]
            for row in rows[header_row - 1:]
        ], f"CSV verification failed: {filename}"
        link = "`${BASE}activities/4th-year-finals/" + filename + "`"
        sheets.append(
            "          { label: " + quote(name) + ", link: " + link
            + (", description: " + quote(description) if description else "") + " },"
        )
        print(f"{name}: {len(rows) - header_row} rows, {sheet.max_column} columns")
    original = "`${BASE}activities/4th-year-finals/" + stem + ".xlsx`"
    first_csv = "`${BASE}activities/4th-year-finals/" + stem + "_" + next(iter(headers)).replace(" ", "_") + ".csv`"
    source = source.replace("link: " + original + ",", "link: " + first_csv + ",")
    marker = "        downloadName: "
    start = source.index("        downloadLink: " + original)
    end = source.index("\n", source.index(marker, start))
    sheet_block = "\n        sheets: [\n" + "\n".join(sheets) + "\n        ],"
    # Replace our previous generated sheet list on subsequent runs.
    if source[end:].startswith("\n        sheets: ["):
        previous_end = source.index("\n        ],", end) + len("\n        ],")
        source = source[:end] + sheet_block + source[previous_end:]
    else:
        source = source[:end] + sheet_block + source[end:]
    workbook.close()
source_path.write_text(source, encoding="utf-8", newline="")
