import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bbbank.de_hyg', ['https://www.bbbank.de/privatkunden.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
