import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ford.fr_y7h', ['https://www.ford.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
