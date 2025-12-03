import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_trinkgut.de_gf6', ['https://www.trinkgut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
