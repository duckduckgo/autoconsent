import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_franken.onleihe.de_gin',
    ['https://franken.onleihe.de/verbund_franken/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
