import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_CA_slegg.com_qs9', ["https://www.slegg.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["CA"]});
