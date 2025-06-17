import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_poki.com_xwx', ["https://poki.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
