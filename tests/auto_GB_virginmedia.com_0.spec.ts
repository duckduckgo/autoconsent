import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_virginmedia.com_0', ["https://www.virginmedia.com/myvmo2"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
