import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_topdoctors.co.uk_0', ["https://www.topdoctors.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
