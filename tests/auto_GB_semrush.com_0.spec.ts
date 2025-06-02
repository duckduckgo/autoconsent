import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_semrush.com_0', ["https://www.semrush.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
