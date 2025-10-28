import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_trooper.ch_ied', ['https://www.trooper.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
