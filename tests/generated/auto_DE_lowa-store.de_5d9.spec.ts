import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lowa-store.de_5d9', ['https://lowa-store.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
