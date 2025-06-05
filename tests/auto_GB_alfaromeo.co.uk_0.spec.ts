import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_alfaromeo.co.uk_0', ["https://www.alfaromeo.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
