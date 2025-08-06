import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_citroen.fr_6f4', ['https://www.citroen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
