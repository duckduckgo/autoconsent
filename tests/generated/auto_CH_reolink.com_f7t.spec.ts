import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reolink.com_f7t', ['https://reolink.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
