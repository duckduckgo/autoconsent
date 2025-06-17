import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_adultwork.com_nit', ["https://adultwork.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
