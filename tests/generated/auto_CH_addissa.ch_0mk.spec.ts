import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_addissa.ch_0mk', ['https://addissa.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
