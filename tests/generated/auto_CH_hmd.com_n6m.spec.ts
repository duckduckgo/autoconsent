import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hmd.com_n6m', ['https://www.hmd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
