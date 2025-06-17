import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_coverworld.com.au_b67', ["https://www.coverworld.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
