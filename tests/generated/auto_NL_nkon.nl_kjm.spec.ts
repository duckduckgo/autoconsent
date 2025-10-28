import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nkon.nl_kjm', ['https://www.nkon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
