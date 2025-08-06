import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_steeltoyz.de_d70', ['https://www.steeltoyz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
