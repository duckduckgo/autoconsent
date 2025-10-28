import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ezgif.com_tfr', ['https://ezgif.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
