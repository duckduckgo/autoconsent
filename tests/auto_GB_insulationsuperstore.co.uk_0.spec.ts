import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_insulationsuperstore.co.uk_0', ["https://www.insulationsuperstore.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
