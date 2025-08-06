import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vinello.ch_u0m', ['https://www.vinello.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
