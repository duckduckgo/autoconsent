import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_yachtall.com_q7f', ['https://www.yachtall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
