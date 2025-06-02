import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_booker.co.uk_0', ["https://www.booker.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
