import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rechtecheck.de_ew8', ['https://rechtecheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
