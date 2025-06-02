import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_iwantgreatcare.org_0', ["https://www.iwantgreatcare.org/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
