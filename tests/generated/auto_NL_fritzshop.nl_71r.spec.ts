import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fritzshop.nl_71r', ['https://fritzshop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
