import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_adultwork.com_0a7', ["https://adultwork.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
