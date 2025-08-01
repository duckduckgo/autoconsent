import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vitalabo.ch_s94', ['https://www.vitalabo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
