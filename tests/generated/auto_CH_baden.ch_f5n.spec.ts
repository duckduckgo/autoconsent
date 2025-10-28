import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baden.ch_f5n', ['https://www.baden.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
