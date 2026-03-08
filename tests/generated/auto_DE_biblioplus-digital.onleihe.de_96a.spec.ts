import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_biblioplus-digital.onleihe.de_96a',
    ['https://biblioplus-digital.onleihe.de/biblioplus-digital/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
