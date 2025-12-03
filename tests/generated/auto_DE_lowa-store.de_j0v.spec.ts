import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lowa-store.de_j0v', ['https://lowa-store.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
