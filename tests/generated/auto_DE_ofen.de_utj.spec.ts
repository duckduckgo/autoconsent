import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ofen.de_utj', ['https://www.ofen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
