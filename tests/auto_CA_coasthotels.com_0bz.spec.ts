import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_CA_coasthotels.com_0bz', ["https://www.coasthotels.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["CA"]});
