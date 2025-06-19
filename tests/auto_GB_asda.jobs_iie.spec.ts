import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_asda.jobs_iie', ['https://www.asda.jobs/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
