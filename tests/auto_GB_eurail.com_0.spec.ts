import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_eurail.com_0', ["https://www.eurail.com/en"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
