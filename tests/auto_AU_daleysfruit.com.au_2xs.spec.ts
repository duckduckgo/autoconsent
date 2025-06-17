import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_daleysfruit.com.au_2xs', ["https://www.daleysfruit.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
