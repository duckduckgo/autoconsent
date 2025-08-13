import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_steeltoyz.de_i51', ['https://www.steeltoyz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
