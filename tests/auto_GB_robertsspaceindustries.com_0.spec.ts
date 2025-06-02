import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_robertsspaceindustries.com_0', ["https://robertsspaceindustries.com/en/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
