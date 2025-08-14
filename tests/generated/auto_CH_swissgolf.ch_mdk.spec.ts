import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissgolf.ch_mdk', ['https://swissgolf.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
