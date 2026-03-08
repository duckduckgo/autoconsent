import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_99designs.fr_phs', ['https://en.99designs.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
