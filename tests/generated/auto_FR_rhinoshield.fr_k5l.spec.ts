import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rhinoshield.fr_k5l', ['https://rhinoshield.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
