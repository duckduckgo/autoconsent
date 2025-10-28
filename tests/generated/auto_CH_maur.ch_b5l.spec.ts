import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_maur.ch_b5l', ['https://www.maur.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
