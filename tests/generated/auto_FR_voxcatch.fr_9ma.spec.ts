import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_voxcatch.fr_9ma', ['https://www.voxcatch.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
