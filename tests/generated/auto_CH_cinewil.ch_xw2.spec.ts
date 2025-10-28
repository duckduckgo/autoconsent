import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cinewil.ch_xw2', ['https://www.cinewil.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
