import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_orpheum.com.au_a7f', ["https://www.orpheum.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
