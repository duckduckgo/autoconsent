import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pearl.fr_g1c', ['https://www.pearl.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
