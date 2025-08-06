import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ford.de_kto', ['https://www.ford.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
