import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_classiccars.com_0', ["https://classiccars.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
