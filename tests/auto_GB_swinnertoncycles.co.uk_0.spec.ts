import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_swinnertoncycles.co.uk_0', ["https://www.swinnertoncycles.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
