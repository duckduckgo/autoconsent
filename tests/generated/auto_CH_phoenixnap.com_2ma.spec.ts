import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_phoenixnap.com_2ma', ['https://phoenixnap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
