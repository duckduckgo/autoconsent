import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_dropbox.com_0', ["https://www.dropbox.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
