import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_CA_slegg.com_en3', ["https://www.slegg.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["CA"]});
