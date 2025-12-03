import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_helios.ch_i9h', ['https://www.helios.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
