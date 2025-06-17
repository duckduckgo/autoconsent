import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_asda.jobs_4f0', ["https://www.asda.jobs/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
