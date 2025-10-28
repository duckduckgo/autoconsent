import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_indy.fr_kxg', ['https://www.indy.fr/home-1/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
