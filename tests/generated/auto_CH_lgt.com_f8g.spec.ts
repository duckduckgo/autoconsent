import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lgt.com_f8g', ['https://www.lgt.com/ch-en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
