import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_faphouse.com_0', ["https://faphouse.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
