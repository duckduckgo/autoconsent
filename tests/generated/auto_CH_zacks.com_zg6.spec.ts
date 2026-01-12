import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zacks.com_zg6', ['https://www.zacks.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
