import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_unsplash.com_0', ['https://unsplash.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
