import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_netmums.com_0', ["https://www.netmums.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
