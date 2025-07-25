import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_effeweg.nl_493', ['https://www.effeweg.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
