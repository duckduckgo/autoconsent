import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fertiggaragen.net_nqr', ['https://fertiggaragen.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
