import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_klapp.pro_824', ['https://www.klapp.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
