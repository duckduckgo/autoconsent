import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_doorsuperstore.co.uk_0', ["https://www.doorsuperstore.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
