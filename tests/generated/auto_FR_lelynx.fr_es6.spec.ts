import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lelynx.fr_es6', ['https://www.lelynx.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
