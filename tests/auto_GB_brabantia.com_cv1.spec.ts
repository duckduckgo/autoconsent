import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_brabantia.com_cv1', ["https://www.brabantia.com/uk/?redirect=disable&utm_source=brabantia.com&utm_medium=referral"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
