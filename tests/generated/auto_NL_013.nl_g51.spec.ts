import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_013.nl_g51', ['https://www.013.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
