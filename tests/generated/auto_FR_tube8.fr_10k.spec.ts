import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tube8.fr_10k', ['https://www.tube8.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
