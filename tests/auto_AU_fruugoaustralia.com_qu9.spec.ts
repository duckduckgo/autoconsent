import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_fruugoaustralia.com_qu9', ["https://www.fruugoaustralia.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
