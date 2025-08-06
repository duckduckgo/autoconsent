import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_demmer-shop.de_o95', ['https://demmer-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
