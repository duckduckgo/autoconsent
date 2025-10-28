import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stiftung-gesundheitswissen.de_xj0', ['https://www.stiftung-gesundheitswissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
