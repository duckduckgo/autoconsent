import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_opel.ch_l3k', ['https://www.opel.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
