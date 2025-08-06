import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_muensterload.onleihe.de_u30',
    ['https://muensterload.onleihe.de/ml/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
