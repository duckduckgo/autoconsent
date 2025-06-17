import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_condorferries.co.uk_10h', ["https://www.condorferries.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
