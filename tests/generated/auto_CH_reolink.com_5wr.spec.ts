import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reolink.com_5wr', ['https://reolink.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
