import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_coverworld.com.au_0', ["https://www.coverworld.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
