import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_support.hpe.com_0', ["https://support.hpe.com/connect/s/?language=en_US"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
