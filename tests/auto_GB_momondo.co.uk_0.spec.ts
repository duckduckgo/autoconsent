import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_momondo.co.uk_0', ["https://www.momondo.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
