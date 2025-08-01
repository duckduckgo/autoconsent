import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klm.de_3gx', ['https://www.klm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
