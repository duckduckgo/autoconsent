import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_visa.com.au_0', ["https://www.visa.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
