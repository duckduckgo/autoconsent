import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vitalabo.ch_g9n', ['https://www.vitalabo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
