import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_abage.ch_hfn', ['https://abage.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
