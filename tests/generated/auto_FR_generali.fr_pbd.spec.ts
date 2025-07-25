import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_generali.fr_pbd', ['https://www.generali.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
