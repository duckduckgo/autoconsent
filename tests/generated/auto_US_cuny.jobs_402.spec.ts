import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cuny.jobs_402', ['https://cuny.jobs/jobs/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
