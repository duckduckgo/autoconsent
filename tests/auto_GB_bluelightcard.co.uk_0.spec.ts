import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_bluelightcard.co.uk_0', ["https://www.bluelightcard.co.uk/en"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
