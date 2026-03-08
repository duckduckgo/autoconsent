import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bachtanne.ch_5km', ['https://bachtanne.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
