import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dispano.fr_mlm', ['https://www.dispano.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
