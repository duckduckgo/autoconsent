import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_asda.jobs_y0y', ['https://www.asda.jobs/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
