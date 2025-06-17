import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_theguardian.com_b3c', ["https://www.theguardian.com/uk"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
