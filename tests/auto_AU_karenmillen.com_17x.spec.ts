import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_karenmillen.com_17x', ["https://www.karenmillen.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
