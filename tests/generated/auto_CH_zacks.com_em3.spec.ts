import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zacks.com_em3', ['https://www.zacks.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
