import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cyclotour.ch_vc9', ['https://cyclotour.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
