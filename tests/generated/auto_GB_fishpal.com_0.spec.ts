import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fishpal.com_0', ['https://www.fishpal.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
