import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_marketwatch.com_0', ["https://www.marketwatch.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
