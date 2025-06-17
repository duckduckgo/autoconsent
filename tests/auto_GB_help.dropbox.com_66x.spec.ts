import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_help.dropbox.com_66x', ["https://help.dropbox.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
