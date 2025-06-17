import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_CA_blsindia-canada.com_0', ["https://www.blsindia-canada.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["CA"]});
