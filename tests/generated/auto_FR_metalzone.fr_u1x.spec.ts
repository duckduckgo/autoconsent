import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_metalzone.fr_u1x', ['https://www.metalzone.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
