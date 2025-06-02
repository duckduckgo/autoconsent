import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_lpsg.com_0', ["https://www.lpsg.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
