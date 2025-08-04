import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_phoenixnap.com_0a5', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
