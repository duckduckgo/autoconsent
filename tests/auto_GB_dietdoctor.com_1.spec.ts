import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_dietdoctor.com_1', ["https://www.dietdoctor.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
