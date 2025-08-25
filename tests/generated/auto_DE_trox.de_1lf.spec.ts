import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_trox.de_1lf', ['https://www.trox.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
