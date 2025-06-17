import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_marketwatch.com_slj', ["https://www.marketwatch.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
