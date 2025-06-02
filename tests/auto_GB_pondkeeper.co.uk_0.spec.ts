import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_pondkeeper.co.uk_0', ["https://www.pondkeeper.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
