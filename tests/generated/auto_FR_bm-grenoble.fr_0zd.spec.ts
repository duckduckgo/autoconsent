import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bm-grenoble.fr_0zd', ['https://bm-grenoble.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
