import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_yachtall.com_lmt', ['https://www.yachtall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
