import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_le-sav.com_snj', ['https://www.le-sav.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
