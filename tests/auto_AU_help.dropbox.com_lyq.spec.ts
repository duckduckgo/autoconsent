import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_help.dropbox.com_lyq', ["https://help.dropbox.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
