import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_sharkclean.co.uk_0', ["https://sharkclean.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
