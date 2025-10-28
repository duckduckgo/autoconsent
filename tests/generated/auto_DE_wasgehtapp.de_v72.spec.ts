import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_wasgehtapp.de_v72',
    ['https://www.wasgehtapp.de/index.php?select_ort=1&ort=Mein+Standort&y=50.1109221&x=8.6821267&radius=20'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
