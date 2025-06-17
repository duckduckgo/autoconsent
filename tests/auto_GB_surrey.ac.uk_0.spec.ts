import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_surrey.ac.uk_0', ["https://www.surrey.ac.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
