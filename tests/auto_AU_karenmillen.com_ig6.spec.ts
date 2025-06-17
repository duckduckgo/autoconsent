import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_karenmillen.com_ig6', ["https://www.karenmillen.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
