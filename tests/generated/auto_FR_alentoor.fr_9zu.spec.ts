import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alentoor.fr_9zu', ['https://www.alentoor.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
