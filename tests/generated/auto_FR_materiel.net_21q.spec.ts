import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_materiel.net_21q', ['https://www.materiel.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
