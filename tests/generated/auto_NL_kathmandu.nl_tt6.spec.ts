import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kathmandu.nl_tt6', ['https://www.kathmandu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
