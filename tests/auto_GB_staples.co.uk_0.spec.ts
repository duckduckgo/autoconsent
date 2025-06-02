import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_staples.co.uk_0', ["https://www.staples.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
