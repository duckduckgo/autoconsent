import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_demmer-shop.de_a1a', ['https://demmer-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
