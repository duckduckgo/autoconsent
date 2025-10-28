import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ige.ch_l88', ['https://www.ige.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
