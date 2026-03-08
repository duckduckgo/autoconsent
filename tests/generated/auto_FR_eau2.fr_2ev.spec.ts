import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eau2.fr_2ev', ['https://eau2.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
