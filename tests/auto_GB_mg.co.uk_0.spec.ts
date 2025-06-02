import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_mg.co.uk_0', ["https://www.mg.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
