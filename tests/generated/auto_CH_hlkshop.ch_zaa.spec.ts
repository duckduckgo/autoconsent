import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hlkshop.ch_zaa', ['https://www.hlkshop.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
