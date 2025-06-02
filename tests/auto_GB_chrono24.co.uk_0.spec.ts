import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_chrono24.co.uk_0', ["https://www.chrono24.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
