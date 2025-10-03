import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_spankbang.com_y4g', ['https://spankbang.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
