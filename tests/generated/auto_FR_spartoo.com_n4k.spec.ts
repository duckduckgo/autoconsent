import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_spartoo.com_n4k', ['https://www.spartoo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
