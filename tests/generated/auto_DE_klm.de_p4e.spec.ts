import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klm.de_p4e', ['https://www.klm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
