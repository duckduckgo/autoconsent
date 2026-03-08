import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_bistum-speyer.onleihe.de_oxm',
    ['https://bistum-speyer.onleihe.de/bistumspeyer/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
