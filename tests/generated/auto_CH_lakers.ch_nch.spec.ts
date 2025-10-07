import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lakers.ch_nch', ['https://www.lakers.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
