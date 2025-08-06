import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zuidas.nl_cf7', ['https://zuidas.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
