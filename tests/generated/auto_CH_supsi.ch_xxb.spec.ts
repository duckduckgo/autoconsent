import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_supsi.ch_xxb', ['https://www.supsi.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
