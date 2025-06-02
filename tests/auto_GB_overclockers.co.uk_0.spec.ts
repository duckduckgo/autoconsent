import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_overclockers.co.uk_0', ["https://www.overclockers.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
