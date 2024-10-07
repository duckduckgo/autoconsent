#!/usr/bin/env node
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from 'url';

export const rulesDir = path.dirname(fileURLToPath(import.meta.url))

async function readFileJSON(filePath) {
  const data = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function buildAutoconsentRules() {
  // merge rules from ./autoconsent into rules.autoconsent array
  const autoconsentDir = path.join(rulesDir, "autoconsent");
  const files = fs.readdirSync(autoconsentDir);
  return await Promise.all(
    files.map((file) => readFileJSON(path.join(autoconsentDir, file)))
  );
}

export async function buildConsentOMaticRules() {
  // fetch ConsentOMatic rule set and merge with our custom rules
  const consentOMaticCommit = "7d7fd2bd6bf2b662350b0eaeca74db6eba155efe";
  const consentOMaticUrl = `https://raw.githubusercontent.com/cavi-au/Consent-O-Matic/${consentOMaticCommit}/Rules.json`;
  const consentOMaticInclude = [
    "didomi.io",
    "oil",
    "optanon",
    "quantcast2",
    "springer",
    "wordpressgdpr",
  ];
  const comRules = {};
  const allComRules = await new Promise((resolve) => {
    https.get(consentOMaticUrl, (res) => {
      res.setEncoding("utf-8");
      let content = "";
      res.on("data", (data) => (content += data));
      res.on("end", () => resolve(JSON.parse(content)));
    });
  });
  consentOMaticInclude.forEach((name) => {
    comRules[name] = allComRules[name];
  });
  return comRules;
}

export function combineRules(autoconsent, consentomatic) {
  return {
    autoconsent,
    consentomatic,
  };
}

(async () => {
  const rules = combineRules(
    await buildAutoconsentRules(),
    await buildConsentOMaticRules()
  );
  fs.writeFile(
    path.join(rulesDir, "rules.json"),
    JSON.stringify(rules, undefined, "  "),
    () => console.log("Written rules.json")
  );
})();
