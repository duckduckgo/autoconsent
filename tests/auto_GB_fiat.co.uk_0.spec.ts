import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_fiat.co.uk_0', ["https://www.fiat.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
