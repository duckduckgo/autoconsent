import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ammo-art.ch_hcu', ['https://ammo-art.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
