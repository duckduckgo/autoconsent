import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_meintiptopf.ch_ocb', ['https://meintiptopf.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
