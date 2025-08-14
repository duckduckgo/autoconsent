import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_freiburg.de_nn7', ['https://www.freiburg.de/pb/,Lde/205243.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
