import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_ionos.co.uk_0', ["https://www.ionos.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
