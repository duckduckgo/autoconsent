import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_inpi.fr_6hk', ['https://www.inpi.fr/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
