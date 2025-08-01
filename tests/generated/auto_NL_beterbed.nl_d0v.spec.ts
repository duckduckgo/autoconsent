import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_beterbed.nl_d0v', ['https://www.beterbed.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
