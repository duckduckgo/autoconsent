import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_chrono24.com_0', ["https://www.chrono24.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
