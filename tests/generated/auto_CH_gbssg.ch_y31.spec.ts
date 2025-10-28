import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gbssg.ch_y31', ['https://www.gbssg.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
