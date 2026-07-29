import fs from "fs";
import path from "path";
import { curriculum } from "../src/data/academy/curriculum";
import { formationsData } from "../src/data/academy/formationsData";
import { tacticsData } from "../src/data/academy/tactics";

const dataDir = path.join(__dirname, "../../backend/app/data");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = {
  curriculum,
  formations: formationsData,
  tactics: tacticsData,
};

fs.writeFileSync(
  path.join(dataDir, "curriculum_db.json"),
  JSON.stringify(db, null, 2),
  "utf-8"
);

console.log("Successfully dumped curriculum data to backend/app/data/curriculum_db.json");
