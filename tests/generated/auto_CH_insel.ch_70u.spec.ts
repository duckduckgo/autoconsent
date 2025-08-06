import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_insel.ch_70u', ['https://www.insel.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
