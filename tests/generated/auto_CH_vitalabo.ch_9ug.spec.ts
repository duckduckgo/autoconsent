import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vitalabo.ch_9ug', ['https://www.vitalabo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
