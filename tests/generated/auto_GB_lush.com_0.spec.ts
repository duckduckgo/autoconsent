import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lush.com_0', ['https://www.lush.com/uk/en'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
