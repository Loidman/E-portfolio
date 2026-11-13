"""Build file listings for downloadable ZIP attachments without extracting them."""

import csv
from pathlib import Path
from zipfile import ZipFile

assets = Path(__file__).resolve().parents[1] / "public/activities/4th-year-finals"
for archive in sorted(assets.glob("*.zip")):
    with ZipFile(archive) as package:
        files = [entry for entry in package.infolist() if not entry.is_dir()]
    with archive.with_suffix(".csv").open("w", encoding="utf-8", newline="") as output:
        writer = csv.writer(output)
        writer.writerow(["File in package", "Size (bytes)"])
        writer.writerows((entry.filename, entry.file_size) for entry in files)
    print(f"{archive.name}: {len(files)} files listed")
