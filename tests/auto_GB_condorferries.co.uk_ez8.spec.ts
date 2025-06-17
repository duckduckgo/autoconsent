import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_condorferries.co.uk_ez8', ["https://www.condorferries.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
