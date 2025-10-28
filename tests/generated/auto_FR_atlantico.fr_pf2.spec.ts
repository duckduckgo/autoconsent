import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_atlantico.fr_pf2', ['https://atlantico.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
