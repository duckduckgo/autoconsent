import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_brandonhirestation.com_0', ["https://brandonhirestation.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
