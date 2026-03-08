import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bronpi.com_2zv', ['https://bronpi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
