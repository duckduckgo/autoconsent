import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_humanite.fr_ivy', ['https://www.humanite.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
