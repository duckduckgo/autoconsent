import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_1und1.de_cgo', ['https://www.1und1.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
