import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ca-paris.com_3xy', ['https://ca-paris.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
