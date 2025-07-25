import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eneco.nl_z83', ['https://www.eneco.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
