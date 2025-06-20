import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_hostinger.com_0', ['https://www.hostinger.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
