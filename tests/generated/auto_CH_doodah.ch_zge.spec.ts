import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_doodah.ch_zge', ['https://doodah.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
