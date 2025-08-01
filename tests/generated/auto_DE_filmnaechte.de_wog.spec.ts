import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_filmnaechte.de_wog', ['https://filmnaechte.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
