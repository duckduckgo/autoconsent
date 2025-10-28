import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fgirl.ch_au0', ['https://www.fgirl.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
