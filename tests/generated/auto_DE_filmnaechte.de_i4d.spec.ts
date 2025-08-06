import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_filmnaechte.de_i4d', ['https://filmnaechte.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
