import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yazio.com_7bh', ['https://www.yazio.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
