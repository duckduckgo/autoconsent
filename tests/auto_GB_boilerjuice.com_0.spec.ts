import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_boilerjuice.com_0', ["https://www.boilerjuice.com/uk"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
