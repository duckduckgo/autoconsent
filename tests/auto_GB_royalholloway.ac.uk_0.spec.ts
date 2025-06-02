import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_royalholloway.ac.uk_0', ["https://www.royalholloway.ac.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
