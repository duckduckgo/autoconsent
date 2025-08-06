import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_breisgau-hochschwarzwald.de_fza',
    ['https://www.breisgau-hochschwarzwald.de/pb/Breisgau-Hochschwarzwald/Start.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
