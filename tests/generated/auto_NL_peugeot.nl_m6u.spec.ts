import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_peugeot.nl_m6u', ['https://www.peugeot.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
