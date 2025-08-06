import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_snaply.de_23d', ['https://www.snaply.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
