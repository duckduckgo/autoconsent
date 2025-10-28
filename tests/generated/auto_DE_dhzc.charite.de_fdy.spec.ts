import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dhzc.charite.de_fdy', ['https://www.dhzc.charite.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
