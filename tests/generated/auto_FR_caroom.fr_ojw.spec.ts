import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_caroom.fr_ojw', ['https://www.caroom.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
