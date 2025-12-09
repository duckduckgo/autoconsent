import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chrono24.ch_90u', ['https://www.chrono24.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
