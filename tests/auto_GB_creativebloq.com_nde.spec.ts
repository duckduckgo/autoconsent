import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_creativebloq.com_nde', ["https://www.creativebloq.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
