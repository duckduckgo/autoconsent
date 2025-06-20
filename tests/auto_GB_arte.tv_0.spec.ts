import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_arte.tv_0', ['https://www.arte.tv/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
