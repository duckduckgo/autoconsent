import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_aber.ac.uk_0', ["https://www.aber.ac.uk/en/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
