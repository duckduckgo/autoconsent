import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_swiftaid.co.uk_0', ["https://www.swiftaid.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
