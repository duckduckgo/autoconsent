import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alpagrumi.ch_xij', ['https://alpagrumi.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
