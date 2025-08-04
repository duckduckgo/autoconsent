import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_finom.co_6uu', ['https://finom.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
