import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fresha.com_ypt', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
