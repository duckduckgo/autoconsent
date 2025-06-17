import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_fruugoaustralia.com_hbu', ["https://www.fruugoaustralia.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
