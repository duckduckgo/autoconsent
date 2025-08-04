import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_yachtall.com_8vg', ['https://www.yachtall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
