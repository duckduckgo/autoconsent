import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_cookpad.com_0', ["https://cookpad.com/uk"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
