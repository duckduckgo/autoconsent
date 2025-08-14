import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_hessen.onleihe.de_mo0',
    ['https://hessen.onleihe.de/verbund_hessen/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
