import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_metro.fr_0d8', ['https://www.metro.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
