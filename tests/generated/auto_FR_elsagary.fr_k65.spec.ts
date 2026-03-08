import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elsagary.fr_k65', ['https://elsagary.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
