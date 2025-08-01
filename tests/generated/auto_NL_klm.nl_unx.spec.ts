import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_klm.nl_unx', ['https://www.klm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
