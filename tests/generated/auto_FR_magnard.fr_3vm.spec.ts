import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_magnard.fr_3vm', ['https://www.magnard.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
