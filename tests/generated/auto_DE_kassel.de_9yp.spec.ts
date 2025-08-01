import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kassel.de_9yp', ['https://www.kassel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
