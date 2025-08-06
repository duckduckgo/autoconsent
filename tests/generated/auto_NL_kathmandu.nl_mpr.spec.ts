import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kathmandu.nl_mpr', ['https://www.kathmandu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
