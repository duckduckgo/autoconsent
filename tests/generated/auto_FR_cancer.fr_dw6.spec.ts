import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cancer.fr_dw6', ['https://www.cancer.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
