import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_CA_bfmtv.com_mew', ["https://www.bfmtv.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["CA"]});
