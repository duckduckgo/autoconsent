import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ufz.de_4ln', ['https://www.ufz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
