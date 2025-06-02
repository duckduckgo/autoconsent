import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_garden4less.co.uk_0', ["https://www.garden4less.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
