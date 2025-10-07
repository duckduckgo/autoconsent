import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_knowunity.fr_y6c', ['https://knowunity.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
