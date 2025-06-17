import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_US_help.dropbox.com_rav', ["https://help.dropbox.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["US"]});
