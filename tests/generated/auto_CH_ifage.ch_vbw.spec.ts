import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ifage.ch_vbw', ['https://www.ifage.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
