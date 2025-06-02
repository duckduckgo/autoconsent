import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_thefarmersdogpub.com_0', ["https://thefarmersdogpub.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
