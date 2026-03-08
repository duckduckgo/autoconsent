import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alfi.de_osh', ['https://alfi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
