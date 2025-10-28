import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_demeter.ch_zok', ['https://demeter.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
