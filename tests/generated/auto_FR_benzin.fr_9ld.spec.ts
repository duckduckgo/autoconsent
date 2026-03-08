import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_benzin.fr_9ld', ['https://benzin.fr/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
