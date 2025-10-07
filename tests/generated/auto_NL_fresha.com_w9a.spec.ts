import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fresha.com_w9a', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
