import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_spankbang.com_fa7', ['https://spankbang.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
