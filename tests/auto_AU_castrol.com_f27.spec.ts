import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_castrol.com_f27', ["https://www.castrol.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
