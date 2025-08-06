import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_trinkgut.de_qu2', ['https://www.trinkgut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
