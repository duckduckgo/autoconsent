import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_expat-savvy.ch_kad', ['https://expat-savvy.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
