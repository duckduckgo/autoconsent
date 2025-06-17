import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_US_xpo.com_1', ["https://www.xpo.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["US"]});
