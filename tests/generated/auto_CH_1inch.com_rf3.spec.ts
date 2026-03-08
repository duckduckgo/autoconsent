import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_1inch.com_rf3', ['https://1inch.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
