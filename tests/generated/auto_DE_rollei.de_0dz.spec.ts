import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rollei.de_0dz', ['https://www.rollei.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
