import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ufz.de_3tc', ['https://www.ufz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
