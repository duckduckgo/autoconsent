import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alnovis.ch_0nr', ['https://alnovis.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
