import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ccbuchner.de_bb1', ['https://www.ccbuchner.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
