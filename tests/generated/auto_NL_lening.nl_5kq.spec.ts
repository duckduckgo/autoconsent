import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lening.nl_5kq', ['https://www.lening.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
