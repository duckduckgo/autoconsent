import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dsl.1und1.de_hyg', ['https://dsl.1und1.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
