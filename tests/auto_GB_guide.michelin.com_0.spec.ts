import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_guide.michelin.com_0', ["https://guide.michelin.com/en"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
