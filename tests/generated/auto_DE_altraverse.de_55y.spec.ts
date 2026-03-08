import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_altraverse.de_55y', ['https://altraverse.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
