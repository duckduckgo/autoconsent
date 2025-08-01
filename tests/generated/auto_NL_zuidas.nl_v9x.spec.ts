import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zuidas.nl_v9x', ['https://zuidas.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
