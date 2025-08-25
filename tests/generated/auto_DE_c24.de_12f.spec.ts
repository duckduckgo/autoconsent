import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_c24.de_12f', ['https://www.c24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
