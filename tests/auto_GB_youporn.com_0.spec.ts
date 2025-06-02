import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_youporn.com_0', ["https://www.youporn.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
