import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_knowunity.fr_p1w', ['https://knowunity.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
