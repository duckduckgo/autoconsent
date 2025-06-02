import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_msccruises.co.uk_0', ["https://www.msccruises.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
