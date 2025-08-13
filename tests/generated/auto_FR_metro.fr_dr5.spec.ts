import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_metro.fr_dr5', ['https://www.metro.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
