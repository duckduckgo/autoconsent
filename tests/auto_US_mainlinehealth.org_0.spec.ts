import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_US_mainlinehealth.org_0', ["https://www.mainlinehealth.org/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["US"]});
