import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pan.nl_0bv', ['https://www.pan.nl/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
