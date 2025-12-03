import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_snaply.de_j4v', ['https://www.snaply.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
