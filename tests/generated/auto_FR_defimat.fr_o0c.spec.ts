import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_defimat.fr_o0c', ['https://defimat.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
