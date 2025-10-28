import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_legorafi.fr_ss2', ['https://www.legorafi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
