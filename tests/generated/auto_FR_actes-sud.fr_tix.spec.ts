import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_actes-sud.fr_tix', ['https://actes-sud.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
