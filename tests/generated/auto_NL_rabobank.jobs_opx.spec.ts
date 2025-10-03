import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rabobank.jobs_opx', ['https://rabobank.jobs/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
