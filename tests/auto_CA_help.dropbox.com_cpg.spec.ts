import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_CA_help.dropbox.com_cpg', ["https://help.dropbox.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["CA"]});
