import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zumstein.ch_23w', ['https://www.zumstein.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
