import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_flexparts.de_n23', ['https://flexparts.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
