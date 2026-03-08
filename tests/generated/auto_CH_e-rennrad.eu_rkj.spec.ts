import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_e-rennrad.eu_rkj', ['https://e-rennrad.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
