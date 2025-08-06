import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_toutfaire.fr_1li', ['https://www.toutfaire.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
