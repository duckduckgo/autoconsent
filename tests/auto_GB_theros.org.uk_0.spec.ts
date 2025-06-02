import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_theros.org.uk_0', ["https://theros.org.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
