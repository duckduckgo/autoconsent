import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_farfetch.com_0', ["https://www.farfetch.com/uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
