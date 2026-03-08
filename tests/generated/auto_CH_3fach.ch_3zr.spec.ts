import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_3fach.ch_3zr', ['https://3fach.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
