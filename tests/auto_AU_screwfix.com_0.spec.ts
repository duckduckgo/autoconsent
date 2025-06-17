import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_screwfix.com_0', ["https://www.screwfix.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
