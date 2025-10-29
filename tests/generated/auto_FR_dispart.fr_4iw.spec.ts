import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dispart.fr_4iw', ['https://www.dispart.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
