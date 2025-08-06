import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_finom.co_8rn', ['https://finom.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
