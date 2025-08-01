import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_insel.ch_e8h', ['https://www.insel.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
