import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_car-tours.ch_pgt', ['https://car-tours.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
