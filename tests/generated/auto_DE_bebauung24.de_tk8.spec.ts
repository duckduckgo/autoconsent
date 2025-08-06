import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bebauung24.de_tk8', ['https://bebauung24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
