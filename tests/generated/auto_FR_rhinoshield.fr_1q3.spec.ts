import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rhinoshield.fr_1q3', ['https://rhinoshield.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
