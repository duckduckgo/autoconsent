import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_brw.ch_9is', ['https://www.brw.ch/de-CH'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
