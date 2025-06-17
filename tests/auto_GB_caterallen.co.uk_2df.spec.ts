import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_caterallen.co.uk_2df', ["https://www.caterallen.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
