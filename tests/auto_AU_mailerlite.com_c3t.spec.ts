import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_mailerlite.com_c3t', ["https://www.mailerlite.com/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
