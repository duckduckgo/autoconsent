import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dekologi.de_v0z', ['https://dekologi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
