import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_klapp.pro_14c', ['https://www.klapp.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
