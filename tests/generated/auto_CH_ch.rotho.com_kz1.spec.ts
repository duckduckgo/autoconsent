import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.rotho.com_kz1', ['https://ch.rotho.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
