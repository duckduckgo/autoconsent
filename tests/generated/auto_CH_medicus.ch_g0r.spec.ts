import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_medicus.ch_g0r', ['https://medicus.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
