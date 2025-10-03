import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_klapp.pro_wqf', ['https://www.klapp.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
