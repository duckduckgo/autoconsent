import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sekada.de_f4y', ['https://www.sekada.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
