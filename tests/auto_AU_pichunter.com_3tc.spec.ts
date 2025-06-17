import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_pichunter.com_3tc', ["https://www.pichunter.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
