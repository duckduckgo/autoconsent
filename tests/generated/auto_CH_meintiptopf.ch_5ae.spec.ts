import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_meintiptopf.ch_5ae', ['https://meintiptopf.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
