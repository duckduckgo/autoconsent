import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_quilter.com_0', ["https://www.quilter.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
