import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bsp-shop.ch_qkl', ['https://bsp-shop.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
