import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_kinsta.com_0', ['https://kinsta.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
