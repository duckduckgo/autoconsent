import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_loveholidays.com_0', ["https://www.loveholidays.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
