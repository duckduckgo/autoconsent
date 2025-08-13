import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gld.nl_s21', ['https://www.gld.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
