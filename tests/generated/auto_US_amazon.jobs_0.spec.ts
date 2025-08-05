import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_amazon.jobs_0', ['https://www.amazon.jobs/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
