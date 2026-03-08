import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anyone.fr_1gr', ['https://anyone.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
