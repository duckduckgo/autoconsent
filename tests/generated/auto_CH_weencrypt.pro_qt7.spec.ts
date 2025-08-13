import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_weencrypt.pro_qt7', ['https://weencrypt.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
