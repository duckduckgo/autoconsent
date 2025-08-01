import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ofen.de_g9f', ['https://www.ofen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
