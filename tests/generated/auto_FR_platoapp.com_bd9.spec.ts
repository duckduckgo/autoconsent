import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_platoapp.com_bd9', ['https://platoapp.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
