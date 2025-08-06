import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lgt.com_drj', ['https://www.lgt.com/ch-en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
