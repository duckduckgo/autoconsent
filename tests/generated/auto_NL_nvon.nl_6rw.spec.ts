import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nvon.nl_6rw', ['https://www.nvon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
