import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_accounts.snapchat.com_0', ["https://accounts.snapchat.com/accounts/v2/login"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
