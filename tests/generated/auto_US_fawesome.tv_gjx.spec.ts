import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fawesome.tv_gjx', ['https://fawesome.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
