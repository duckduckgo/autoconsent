import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_westmidlandsrailway.co.uk_0', ["https://www.westmidlandsrailway.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
