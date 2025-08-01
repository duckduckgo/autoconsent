import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autokunz.ch_wiw', ['https://autokunz.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
