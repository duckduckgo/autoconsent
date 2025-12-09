import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_radiofg.com_vx3', ['https://www.radiofg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
