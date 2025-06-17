import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_vosan.co_46k', ["https://www.vosan.co/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
