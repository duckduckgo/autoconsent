import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_saily.com_0', ["https://saily.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
