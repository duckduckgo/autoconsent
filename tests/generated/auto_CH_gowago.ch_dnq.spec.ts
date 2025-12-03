import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gowago.ch_dnq', ['https://gowago.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
