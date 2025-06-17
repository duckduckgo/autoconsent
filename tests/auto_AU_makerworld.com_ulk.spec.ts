import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_makerworld.com_ulk', ["https://makerworld.com/en"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
