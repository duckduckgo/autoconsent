import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rechtecheck.de_229', ['https://rechtecheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
