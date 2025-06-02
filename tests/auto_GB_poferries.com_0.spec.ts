import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_poferries.com_0', ["https://www.poferries.com/en"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
