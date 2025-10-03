import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fnv.nl_w1z', ['https://www.fnv.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
