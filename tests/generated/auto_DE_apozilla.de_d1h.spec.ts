import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_apozilla.de_d1h', ['https://www.apozilla.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
