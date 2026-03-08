import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aromazon.fr_6ze', ['https://aromazon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
