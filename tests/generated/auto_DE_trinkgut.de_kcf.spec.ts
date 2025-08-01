import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_trinkgut.de_kcf', ['https://www.trinkgut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
