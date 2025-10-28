import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sav.darty.com_bit', ['https://sav.darty.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
