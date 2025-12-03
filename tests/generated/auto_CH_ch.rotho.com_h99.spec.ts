import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.rotho.com_h99', ['https://ch.rotho.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
