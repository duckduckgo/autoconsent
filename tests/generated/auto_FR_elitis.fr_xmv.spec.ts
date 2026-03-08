import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elitis.fr_xmv', ['https://elitis.fr/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
