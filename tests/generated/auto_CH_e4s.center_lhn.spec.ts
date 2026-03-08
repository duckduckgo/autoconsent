import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_e4s.center_lhn', ['https://e4s.center/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
