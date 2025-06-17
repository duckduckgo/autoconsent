import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_CA_rfi.fr_hpz', ["https://www.rfi.fr/en/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["CA"]});
