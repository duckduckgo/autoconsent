import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arte.tv_ln7', ['https://www.arte.tv/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
