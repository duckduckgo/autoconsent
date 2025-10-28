import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_zaclys.com_l7w', ['https://www.zaclys.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
