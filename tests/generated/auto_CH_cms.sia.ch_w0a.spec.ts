import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cms.sia.ch_w0a', ['https://www.sia.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
