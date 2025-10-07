import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_spankbang.com_0ue', ['https://spankbang.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
