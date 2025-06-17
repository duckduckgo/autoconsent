import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_surrey.ac.uk_crs', ["https://www.surrey.ac.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
