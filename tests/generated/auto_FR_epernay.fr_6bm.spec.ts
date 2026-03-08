import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_epernay.fr_6bm', ['https://epernay.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
