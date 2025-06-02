import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_classic-trader.com_0', ["https://www.classic-trader.com/uk/cars"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
