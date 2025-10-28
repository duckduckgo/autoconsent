import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_inria.fr_dw8', ['https://www.inria.fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
