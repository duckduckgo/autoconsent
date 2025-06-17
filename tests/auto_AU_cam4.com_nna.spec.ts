import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_cam4.com_nna', ["https://www.cam4.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
