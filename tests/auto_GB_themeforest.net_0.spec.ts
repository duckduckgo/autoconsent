import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_themeforest.net_0', ["https://themeforest.net/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
