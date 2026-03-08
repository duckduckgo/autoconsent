import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_arena2036.de_p4q', ['https://arena2036.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
