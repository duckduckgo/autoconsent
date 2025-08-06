import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ufz.de_0q8', ['https://www.ufz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
