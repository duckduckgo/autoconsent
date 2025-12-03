import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huss-licht-ton.de_jj0', ['https://www.huss-licht-ton.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
