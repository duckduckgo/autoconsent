import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_supremecourt.uk_0', ["https://www.supremecourt.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
