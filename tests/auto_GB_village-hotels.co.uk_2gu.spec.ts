import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_village-hotels.co.uk_2gu', ["https://www.village-hotels.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
