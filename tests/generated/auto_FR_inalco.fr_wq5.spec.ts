import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_inalco.fr_wq5', ['https://www.inalco.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
