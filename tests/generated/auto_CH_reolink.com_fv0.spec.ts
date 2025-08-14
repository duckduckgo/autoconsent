import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reolink.com_fv0', ['https://reolink.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
