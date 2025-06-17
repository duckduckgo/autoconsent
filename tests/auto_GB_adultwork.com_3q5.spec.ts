import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_adultwork.com_3q5', ["https://www.adultwork.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
