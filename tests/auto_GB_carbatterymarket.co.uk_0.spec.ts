import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_carbatterymarket.co.uk_0', ["https://carbatterymarket.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
