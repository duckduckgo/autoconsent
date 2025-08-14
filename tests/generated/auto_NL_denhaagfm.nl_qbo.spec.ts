import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denhaagfm.nl_qbo', ['https://www.denhaagfm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
