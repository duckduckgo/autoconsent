import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_belalp.ch_22y', ['https://www.belalp.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
