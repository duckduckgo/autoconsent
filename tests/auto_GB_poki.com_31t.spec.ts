import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_poki.com_31t', ["https://poki.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
