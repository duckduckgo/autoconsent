import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_skysports.com_efx', ["https://www.skysports.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
