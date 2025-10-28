import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ekoi.fr_ize', ['https://www.ekoi.fr/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
