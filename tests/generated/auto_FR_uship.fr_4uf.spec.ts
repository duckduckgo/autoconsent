import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_uship.fr_4uf', ['https://www.uship.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
