import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_buchard.ch_p6x', ['https://www.buchard.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
