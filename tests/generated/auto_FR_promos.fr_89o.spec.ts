import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_promos.fr_89o', ['https://www.promos.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
