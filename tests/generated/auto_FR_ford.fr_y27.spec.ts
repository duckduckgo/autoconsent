import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ford.fr_y27', ['https://www.ford.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
