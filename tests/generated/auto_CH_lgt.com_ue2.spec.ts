import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lgt.com_ue2', ['https://www.lgt.com/global-en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
