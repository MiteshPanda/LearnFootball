import fs from "fs";
import path from "path";
import { glossaryTerms } from "../src/data/academy/glossaryData";

const dataDir = path.join(__dirname, "../../backend/app/data");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(
  path.join(dataDir, "glossary_db.json"),
  JSON.stringify(glossaryTerms, null, 2),
  "utf-8"
);

console.log("Successfully dumped glossary data to backend/app/data/glossary_db.json");
