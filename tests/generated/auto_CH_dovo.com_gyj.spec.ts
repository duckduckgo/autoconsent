import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dovo.com_gyj', ['https://dovo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
