import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eleshop.nl_vld', ['https://www.eleshop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
