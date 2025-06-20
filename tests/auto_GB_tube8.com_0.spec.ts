import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_tube8.com_0', ['https://www.tube8.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
