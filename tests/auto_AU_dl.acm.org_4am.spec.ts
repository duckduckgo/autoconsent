import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_dl.acm.org_4am', ["https://dl.acm.org/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
