import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_frontline.fr_d9w', ['https://frontline.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
