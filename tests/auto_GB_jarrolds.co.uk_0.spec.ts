import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_jarrolds.co.uk_0', ["https://www.jarrolds.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
