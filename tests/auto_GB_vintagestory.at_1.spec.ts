import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_vintagestory.at_1', ["https://www.vintagestory.at/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
