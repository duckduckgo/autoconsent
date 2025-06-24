import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thorlabs.com_87c', ['https://www.thorlabs.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
