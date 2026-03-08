import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_e-ausleihe-franken.onleihe.de_igl',
    ['https://e-ausleihe-franken.onleihe.de/e-ausleihe-franken/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
