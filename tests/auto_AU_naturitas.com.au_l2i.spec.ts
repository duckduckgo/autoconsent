import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_naturitas.com.au_l2i', ["https://www.naturitas.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
