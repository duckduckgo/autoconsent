import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_delizio.ch_zgl', ['https://www.delizio.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
