import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_albi.fr_j5h', ['https://albi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
