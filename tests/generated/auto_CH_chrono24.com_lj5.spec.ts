import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chrono24.com_lj5', ['https://www.chrono24.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
