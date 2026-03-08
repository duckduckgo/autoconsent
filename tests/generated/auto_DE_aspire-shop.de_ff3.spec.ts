import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aspire-shop.de_ff3', ['https://aspire-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
