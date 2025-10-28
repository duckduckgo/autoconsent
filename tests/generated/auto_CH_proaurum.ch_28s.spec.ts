import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_proaurum.ch_28s', ['https://proaurum.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
