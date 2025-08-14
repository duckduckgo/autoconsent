import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_almenrausch.at_c6z', ['https://www.almenrausch.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
