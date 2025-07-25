import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arte.tv_g0h', ['https://www.arte.tv/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
