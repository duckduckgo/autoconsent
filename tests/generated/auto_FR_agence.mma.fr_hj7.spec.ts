import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agence.mma.fr_hj7', ['https://agence.mma.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
