import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chambery.fr_43a', ['https://www.chambery.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
