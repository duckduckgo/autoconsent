import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissgolf.ch_r28', ['https://swissgolf.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
