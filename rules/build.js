#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const https = require("https");

const rules = {
  autoconsent: [],
  consentomatic: {}
};

async function readFileJSON(filePath) {
  const data = await fs.promises.readFile(filePath, "utf-8")
  return JSON.parse(data);
}

// merge rules from ./autoconsent into rules.autoconsent array
const autoconsentDir = path.join(__dirname, "autoconsent");
const files = fs.readdirSync(autoconsentDir);
const buildAutoconsent = Promise.all(
  files.map(file => readFileJSON(path.join(autoconsentDir, file)))
).then(r => (rules.autoconsent = r));

// fetch ConsentOMatic rule set and merge with our custom rules
const consentOMaticCommit = "af042804d2834e4c7bdfbcf00254a41762ea0776";
const consentOMaticUrl = `https://raw.githubusercontent.com/cavi-au/Consent-O-Matic/${consentOMaticCommit}/Rules.json`;
const consentOMaticDir = path.join(__dirname, "consentomatic");
const consentOMaticSkip = ["trustarcbar", "trustarcframe", "sourcepoint", "lemonde.fr"];
const buildConsentOMatic = (async () => {
  const comRules = await new Promise(resolve => {
    https.get(consentOMaticUrl, res => {
      res.setEncoding("utf-8");
      let content = "";
      res.on("data", data => (content += data));
      res.on("end", () => resolve(JSON.parse(content)));
    });
  });
  consentOMaticSkip.forEach(name => delete comRules[name]);
  const extraRules = fs.readdirSync(consentOMaticDir);
  await Promise.all(
    extraRules.map(async file => {
      const rule = await readFileJSON(path.join(consentOMaticDir, file));
      // rule name is file name with JSON extension removed
      comRules[file.substring(0, file.length - 5)] = rule;
    })
  );
  rules.consentomatic = comRules;
})();

Promise.all([buildAutoconsent, buildConsentOMatic]).then(() => {
  fs.writeFile(
    path.join(__dirname, "rules.json"),
    JSON.stringify(rules, undefined, "  "),
    () => console.log("Written rules.json")
  );
});
