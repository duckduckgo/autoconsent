import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denhaagfm.nl_pik', ['https://www.denhaagfm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
