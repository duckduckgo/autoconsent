import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fabrik.de_b96', ['https://fabrik.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
