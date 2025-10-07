import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_graef.de_x36', ['https://www.graef.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
