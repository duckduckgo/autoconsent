import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_lordgun.com.au_n3v', ["https://www.lordgun.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
