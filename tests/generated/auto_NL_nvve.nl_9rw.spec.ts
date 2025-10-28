import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nvve.nl_9rw', ['https://www.nvve.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
