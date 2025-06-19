import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_arte.tv_l3g', ['https://www.arte.tv/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
