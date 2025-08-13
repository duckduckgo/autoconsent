import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eneco.nl_0ag', ['https://www.eneco.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
