import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hdzuerisee.ch_cd7', ['https://hdzuerisee.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
