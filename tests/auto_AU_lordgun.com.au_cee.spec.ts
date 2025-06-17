import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_lordgun.com.au_cee', ["https://www.lordgun.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
