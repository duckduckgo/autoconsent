import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_cpfc.co.uk_0', ["https://www.cpfc.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
