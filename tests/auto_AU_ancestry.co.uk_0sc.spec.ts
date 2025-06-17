import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_ancestry.co.uk_0sc', ["https://www.ancestry.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
