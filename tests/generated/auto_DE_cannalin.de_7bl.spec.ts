import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cannalin.de_7bl', ['https://cannalin.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
