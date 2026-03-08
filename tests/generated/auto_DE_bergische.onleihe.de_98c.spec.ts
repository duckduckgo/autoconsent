import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_bergische.onleihe.de_98c',
    ['https://bergische.onleihe.de/bergische-onleihe/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
