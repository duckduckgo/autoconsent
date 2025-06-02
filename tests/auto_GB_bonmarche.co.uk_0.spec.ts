import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_bonmarche.co.uk_0', ["https://www.bonmarche.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
