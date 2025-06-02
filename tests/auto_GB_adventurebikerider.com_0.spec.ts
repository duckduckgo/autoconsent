import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_adventurebikerider.com_0', ["https://www.adventurebikerider.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
