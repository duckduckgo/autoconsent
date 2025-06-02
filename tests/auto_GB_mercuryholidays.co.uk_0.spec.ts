import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_mercuryholidays.co.uk_0', ["https://www.mercuryholidays.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
