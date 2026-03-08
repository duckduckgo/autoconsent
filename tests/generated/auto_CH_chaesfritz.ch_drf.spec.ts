import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chaesfritz.ch_drf', ['https://chaesfritz.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
