import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_jw.org_0', ["https://www.jw.org/en/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
