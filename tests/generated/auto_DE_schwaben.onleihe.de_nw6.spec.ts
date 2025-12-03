import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_schwaben.onleihe.de_nw6',
    ['https://schwaben.onleihe.de/schwaben/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
