import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auto.de_t36', ['https://www.auto.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
