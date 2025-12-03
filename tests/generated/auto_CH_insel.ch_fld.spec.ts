import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_insel.ch_fld', ['https://www.insel.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
