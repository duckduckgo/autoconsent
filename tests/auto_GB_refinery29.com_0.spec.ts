import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_refinery29.com_0', ["https://www.refinery29.com/en-gb"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
