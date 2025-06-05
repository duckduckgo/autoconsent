import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_on1.com_0', ['https://www.on1.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
