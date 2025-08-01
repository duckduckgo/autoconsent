import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reyoli.ch_0qb', ['https://www.reyoli.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
