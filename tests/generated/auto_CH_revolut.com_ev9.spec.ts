import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_revolut.com_ev9', ['https://www.revolut.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
