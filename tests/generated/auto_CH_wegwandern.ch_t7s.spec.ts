import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wegwandern.ch_t7s', ['https://wegwandern.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
