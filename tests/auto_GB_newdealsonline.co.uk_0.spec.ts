import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_newdealsonline.co.uk_0', ["https://www.newdealsonline.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
