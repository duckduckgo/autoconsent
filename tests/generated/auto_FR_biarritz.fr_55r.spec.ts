import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_biarritz.fr_55r', ['https://www.biarritz.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
