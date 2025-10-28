import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_viecuri.nl_m0s', ['https://www.viecuri.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
