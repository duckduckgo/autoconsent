import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_namemc.com_w6u', ['https://namemc.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
