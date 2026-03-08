import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_casecoach.com_3bj', ['https://casecoach.com/c/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
