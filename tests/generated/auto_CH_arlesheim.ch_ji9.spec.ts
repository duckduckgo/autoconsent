import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arlesheim.ch_ji9', ['https://www.arlesheim.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
