import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_marketwatch.com_k9w', ["https://www.marketwatch.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
