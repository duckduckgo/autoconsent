import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rechtecheck.de_4ey', ['https://rechtecheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
