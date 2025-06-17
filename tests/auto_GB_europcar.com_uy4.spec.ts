import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_europcar.com_uy4', ["https://www.europcar.com/en-us"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
