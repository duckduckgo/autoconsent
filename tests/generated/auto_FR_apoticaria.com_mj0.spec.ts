import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_apoticaria.com_mj0', ['https://apoticaria.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
