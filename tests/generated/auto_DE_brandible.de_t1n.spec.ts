import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brandible.de_t1n', ['https://www.brandible.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
