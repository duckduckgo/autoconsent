import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_adultwork.com_c25', ["https://www.adultwork.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
