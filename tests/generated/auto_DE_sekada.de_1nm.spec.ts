import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sekada.de_1nm', ['https://www.sekada.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
