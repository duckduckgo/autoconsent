import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_materiel.net_plw', ['https://www.materiel.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
