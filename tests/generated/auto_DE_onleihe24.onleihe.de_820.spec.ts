import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_onleihe24.onleihe.de_820',
    ['https://onleihe24.onleihe.de/hellwegsauerland/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
