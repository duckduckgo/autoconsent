import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chu93.aphp.fr_mve', ['https://chu93.aphp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
