import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_asda.jobs_0', ["https://www.asda.jobs/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
