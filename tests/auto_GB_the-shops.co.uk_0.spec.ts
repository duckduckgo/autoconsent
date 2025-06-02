import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_the-shops.co.uk_0', ["https://www.the-shops.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
