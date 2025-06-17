import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_ancestry.co.uk_biz', ["https://www.ancestry.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
