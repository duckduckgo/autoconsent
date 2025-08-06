import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_leo-sued.onleihe.de_q2q',
    ['https://leo-sued.onleihe.de/leo-sued/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
