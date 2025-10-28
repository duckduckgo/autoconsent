import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frohkost.ch_gd3', ['https://www.frohkost.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
