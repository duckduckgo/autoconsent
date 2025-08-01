import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_finom.co_1w7', ['https://finom.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
