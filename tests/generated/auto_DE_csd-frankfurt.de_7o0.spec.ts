import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_csd-frankfurt.de_7o0', ['https://csd-frankfurt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
