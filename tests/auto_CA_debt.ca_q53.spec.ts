import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_CA_debt.ca_q53', ["https://www.debt.ca/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["CA"]});
