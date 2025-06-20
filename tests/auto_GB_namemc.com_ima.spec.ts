import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_namemc.com_ima', ['https://namemc.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
