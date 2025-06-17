import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_boody.com.au_qz0', ["https://www.boody.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
