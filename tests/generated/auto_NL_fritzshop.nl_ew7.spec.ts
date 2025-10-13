import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fritzshop.nl_ew7', ['https://fritzshop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
