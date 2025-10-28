import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_farmy.ch_ybp', ['https://www.farmy.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
