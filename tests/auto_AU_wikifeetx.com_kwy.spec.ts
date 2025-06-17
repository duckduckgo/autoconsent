import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_wikifeetx.com_kwy', ["https://wikifeetx.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
