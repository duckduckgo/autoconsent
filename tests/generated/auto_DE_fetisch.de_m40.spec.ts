import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fetisch.de_m40', ['https://www.fetisch.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
