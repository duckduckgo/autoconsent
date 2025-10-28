import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutsches-schilddruesenzentrum.de_u43', ['https://www.deutsches-schilddruesenzentrum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
