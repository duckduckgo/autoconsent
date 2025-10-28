import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tours.fr_fkp', ['https://www.tours.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
