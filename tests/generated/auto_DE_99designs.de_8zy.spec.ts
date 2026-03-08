import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_99designs.de_8zy', ['https://en.99designs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
