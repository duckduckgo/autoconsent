import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fresha.com_me5', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
