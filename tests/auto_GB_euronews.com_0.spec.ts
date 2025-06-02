import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_euronews.com_0', ["https://www.euronews.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
