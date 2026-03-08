import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.laperla.com_fm7', ['https://ch.laperla.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
