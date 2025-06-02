import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_ashwoodnurseries.com_0', ["https://www.ashwoodnurseries.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
