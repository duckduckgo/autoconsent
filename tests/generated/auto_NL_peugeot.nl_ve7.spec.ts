import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_peugeot.nl_ve7', ['https://www.peugeot.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
