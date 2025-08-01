import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fritzshop.nl_l6p', ['https://fritzshop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
