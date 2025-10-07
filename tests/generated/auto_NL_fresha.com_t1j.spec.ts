import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fresha.com_t1j', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
