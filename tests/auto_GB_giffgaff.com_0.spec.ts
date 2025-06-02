import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_giffgaff.com_0', ["https://www.giffgaff.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
