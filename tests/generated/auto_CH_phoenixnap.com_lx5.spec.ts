import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_phoenixnap.com_lx5', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
