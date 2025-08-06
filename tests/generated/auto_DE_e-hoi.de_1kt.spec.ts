import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_e-hoi.de_1kt', ['https://www.e-hoi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
