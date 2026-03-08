import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bbag.ch_1d8', ['https://bbag.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
