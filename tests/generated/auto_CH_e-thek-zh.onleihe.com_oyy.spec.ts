import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_e-thek-zh.onleihe.com_oyy',
    ['https://e-thek-zh.onleihe.com/e-thek/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
