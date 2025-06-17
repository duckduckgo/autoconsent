import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_u-buy.com.au_0', ["https://www.u-buy.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
