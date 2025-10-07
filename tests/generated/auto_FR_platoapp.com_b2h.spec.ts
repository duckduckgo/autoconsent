import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_platoapp.com_b2h', ['https://platoapp.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
