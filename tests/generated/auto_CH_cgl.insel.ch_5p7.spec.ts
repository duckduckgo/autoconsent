import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cgl.insel.ch_5p7', ['https://cgl.insel.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
