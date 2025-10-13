import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hdzuerisee.ch_vi9', ['https://hdzuerisee.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
