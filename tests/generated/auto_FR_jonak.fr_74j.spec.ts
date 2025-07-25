import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jonak.fr_74j', ['https://www.jonak.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
