import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zuidas.nl_abm', ['https://zuidas.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
