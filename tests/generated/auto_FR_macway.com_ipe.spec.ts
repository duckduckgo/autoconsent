import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_macway.com_ipe', ['https://www.macway.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
