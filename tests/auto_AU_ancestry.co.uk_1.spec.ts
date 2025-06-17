import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_ancestry.co.uk_1', ["https://www.ancestry.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
