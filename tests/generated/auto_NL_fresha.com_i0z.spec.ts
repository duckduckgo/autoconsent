import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fresha.com_i0z', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
