import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_US_xpo.com_mwv', ["https://www.xpo.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["US"]});
