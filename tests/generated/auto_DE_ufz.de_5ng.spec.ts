import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ufz.de_5ng', ['https://www.ufz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
