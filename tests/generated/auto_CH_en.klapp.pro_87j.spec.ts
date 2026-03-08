import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_en.klapp.pro_87j', ['https://en.klapp.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
