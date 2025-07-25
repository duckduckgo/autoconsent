import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_akkushop.de_e5l', ['https://www.akkushop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
