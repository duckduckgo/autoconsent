import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_shure.com_qh6', ["https://www.shure.com/en-ASIA"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
