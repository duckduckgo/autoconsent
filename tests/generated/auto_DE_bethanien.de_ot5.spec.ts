import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bethanien.de_ot5', ['https://bethanien.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
