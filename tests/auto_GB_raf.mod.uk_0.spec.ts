import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_raf.mod.uk_0', ["https://www.raf.mod.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
