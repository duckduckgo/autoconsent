import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_dashboard.stripe.com_0', ["https://dashboard.stripe.com/login"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
