import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kassel.de_rfr', ['https://www.kassel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
