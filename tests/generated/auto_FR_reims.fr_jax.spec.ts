import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reims.fr_jax', ['https://www.reims.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
