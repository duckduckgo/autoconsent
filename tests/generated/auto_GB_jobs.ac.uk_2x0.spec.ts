import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jobs.ac.uk_2x0', ['https://www.jobs.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
