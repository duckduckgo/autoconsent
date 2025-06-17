import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_peugeot.com.au_5um', ["https://www.peugeot.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
