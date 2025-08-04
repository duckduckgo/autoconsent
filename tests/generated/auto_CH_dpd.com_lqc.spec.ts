import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dpd.com_lqc', ['https://www.dpd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
