import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klonovsky.de_czt', ['https://www.klonovsky.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
