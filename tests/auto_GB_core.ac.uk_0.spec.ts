import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_core.ac.uk_0', ["https://core.ac.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
