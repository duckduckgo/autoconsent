import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ge.ch_e36', ['https://www.ge.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
