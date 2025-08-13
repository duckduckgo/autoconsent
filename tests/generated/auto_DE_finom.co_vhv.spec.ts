import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_finom.co_vhv', ['https://finom.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
