import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rabobank.jobs_bcb', ['https://rabobank.jobs/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
