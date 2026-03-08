import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayern.adfc.de_nyy', ['https://bayern.adfc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
