import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_citroen.fr_rlv', ['https://www.citroen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
