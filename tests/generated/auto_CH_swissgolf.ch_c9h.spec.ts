import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissgolf.ch_c9h', ['https://swissgolf.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
