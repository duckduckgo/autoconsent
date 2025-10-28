import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gentilgeek.fr_702', ['https://gentilgeek.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
