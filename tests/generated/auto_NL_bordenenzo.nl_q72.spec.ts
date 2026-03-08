import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bordenenzo.nl_q72', ['https://bordenenzo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
