import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yourdevice.ch_orv', ['https://yourdevice.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
