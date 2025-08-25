import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_somfy.ch_4hi', ['https://www.somfy.ch/de-ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
