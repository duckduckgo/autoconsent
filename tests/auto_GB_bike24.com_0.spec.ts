import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_bike24.com_0', ["https://www.bike24.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
