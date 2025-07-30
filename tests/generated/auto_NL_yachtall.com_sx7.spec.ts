import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_yachtall.com_sx7', ['https://www.yachtall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
