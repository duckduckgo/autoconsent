import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_plus.nl_neh', ['https://www.plus.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
