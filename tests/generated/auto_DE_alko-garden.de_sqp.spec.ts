import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alko-garden.de_sqp', ['https://alko-garden.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
