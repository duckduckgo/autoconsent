import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hellowatt.fr_ywh', ['https://www.hellowatt.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
