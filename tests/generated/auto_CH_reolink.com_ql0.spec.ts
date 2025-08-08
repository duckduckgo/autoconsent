import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reolink.com_ql0', ['https://reolink.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
