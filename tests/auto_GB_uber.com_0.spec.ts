import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_uber.com_0', ["https://www.uber.com/gb/en/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
