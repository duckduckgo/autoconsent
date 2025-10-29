import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rechtecheck.de_zb7', ['https://rechtecheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
