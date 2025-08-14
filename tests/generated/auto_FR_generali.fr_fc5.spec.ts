import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_generali.fr_fc5', ['https://www.generali.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
