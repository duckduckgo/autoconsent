import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sephora.fr_t6e', ['https://www.sephora.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
