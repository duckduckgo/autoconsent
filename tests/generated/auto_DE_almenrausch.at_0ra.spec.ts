import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_almenrausch.at_0ra', ['https://www.almenrausch.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
