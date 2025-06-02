import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_rolandgarros.com_0', ["https://www.rolandgarros.com/en-us/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
