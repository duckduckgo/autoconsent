import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reolink.com_k2l', ['https://reolink.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
