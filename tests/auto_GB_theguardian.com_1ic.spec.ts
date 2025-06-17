import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_theguardian.com_1ic', ["https://www.theguardian.com/theobserverarchive"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
