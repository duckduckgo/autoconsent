import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rhne.ch_qxs', ['https://www.rhne.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
