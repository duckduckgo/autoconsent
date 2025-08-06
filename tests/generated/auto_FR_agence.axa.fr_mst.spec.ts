import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agence.axa.fr_mst', ['https://agence.axa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
