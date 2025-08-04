import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_yachtall.com_cqp', ['https://www.yachtall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
