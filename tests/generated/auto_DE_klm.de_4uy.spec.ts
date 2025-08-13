import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klm.de_4uy', ['https://www.klm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
