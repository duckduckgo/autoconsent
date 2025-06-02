import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_change.org_0', ["https://www.change.org/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
