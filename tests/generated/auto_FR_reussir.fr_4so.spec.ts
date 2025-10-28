import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reussir.fr_4so', ['https://www.reussir.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
