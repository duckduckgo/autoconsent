import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_loyalfans.com_0', ["https://www.loyalfans.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
