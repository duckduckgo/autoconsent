import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chrono24.com_fy9', ['https://www.chrono24.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
