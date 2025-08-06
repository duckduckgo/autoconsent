import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klm.de_mxj', ['https://www.klm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
