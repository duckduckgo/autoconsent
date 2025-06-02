import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_nutaku.net_0', ["https://www.nutaku.net/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
