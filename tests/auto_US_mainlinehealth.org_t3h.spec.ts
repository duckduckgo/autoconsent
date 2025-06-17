import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_US_mainlinehealth.org_t3h', ["https://www.mainlinehealth.org/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["US"]});
