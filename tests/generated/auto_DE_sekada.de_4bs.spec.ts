import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sekada.de_4bs', ['https://www.sekada.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
