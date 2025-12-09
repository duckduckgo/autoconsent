import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_softline.fr_b7s', ['https://www.softline.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
