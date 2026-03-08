import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_e.lavoisier.fr_3hc', ['https://e.lavoisier.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
