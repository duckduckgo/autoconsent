import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fawesome.tv_dqw', ['https://fawesome.tv/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
