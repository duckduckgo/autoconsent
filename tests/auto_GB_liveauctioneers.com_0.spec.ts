import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_liveauctioneers.com_0', ["https://www.liveauctioneers.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
