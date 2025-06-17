import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_classiccars.com_osg', ["https://classiccars.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
