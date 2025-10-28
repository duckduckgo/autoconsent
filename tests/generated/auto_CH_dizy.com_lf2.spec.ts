import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dizy.com_lf2', ['https://www.dizy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
