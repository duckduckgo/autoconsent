import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_bbc.co.uk_0', ["https://www.bbc.co.uk/news"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
