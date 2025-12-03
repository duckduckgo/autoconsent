import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dw-shop.de_5oh', ['https://www.dw-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
