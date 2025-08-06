import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pearl.fr_cfe', ['https://www.pearl.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
