import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_freiburg.de_w40', ['https://www.freiburg.de/pb/,Lde/205243.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
