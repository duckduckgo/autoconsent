import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_biblioload.onleihe.de_q8p',
    ['https://biblioload.onleihe.de/verbund_burghausen/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
