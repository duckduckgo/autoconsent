import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_clockify.me_aag', ['https://clockify.me/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
