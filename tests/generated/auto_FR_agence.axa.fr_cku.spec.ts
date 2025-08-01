import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agence.axa.fr_cku', ['https://agence.axa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
