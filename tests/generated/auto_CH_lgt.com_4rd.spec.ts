import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lgt.com_4rd', ['https://www.lgt.com/global-en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
