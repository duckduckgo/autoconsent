import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_giant-bicycles.com_0', ["https://www.giant-bicycles.com/global"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
