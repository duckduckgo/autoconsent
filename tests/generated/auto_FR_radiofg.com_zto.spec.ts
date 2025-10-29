import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_radiofg.com_zto', ['https://www.radiofg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
