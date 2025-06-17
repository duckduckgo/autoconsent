import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_create.roblox.com_0hi', ["https://create.roblox.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
