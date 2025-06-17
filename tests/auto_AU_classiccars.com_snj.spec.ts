import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_classiccars.com_snj', ["https://classiccars.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
