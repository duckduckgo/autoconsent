import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fsd.ch_4ou', ['https://fsd.ch/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
