import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ccbuchner.de_jd9', ['https://www.ccbuchner.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
