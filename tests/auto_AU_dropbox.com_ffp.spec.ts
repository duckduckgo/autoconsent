import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_dropbox.com_ffp', ["https://www.dropbox.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
