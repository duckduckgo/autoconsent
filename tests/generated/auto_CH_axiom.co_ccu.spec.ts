import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_axiom.co_ccu', ['https://axiom.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
