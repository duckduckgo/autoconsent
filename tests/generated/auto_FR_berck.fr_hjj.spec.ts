import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_berck.fr_hjj', ['https://berck.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
