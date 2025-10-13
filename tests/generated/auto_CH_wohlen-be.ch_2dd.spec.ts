import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wohlen-be.ch_2dd', ['https://www.wohlen-be.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
