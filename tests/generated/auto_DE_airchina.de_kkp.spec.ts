import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airchina.de_kkp', ['https://www.airchina.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
