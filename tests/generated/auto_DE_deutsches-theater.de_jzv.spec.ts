import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutsches-theater.de_jzv', ['https://www.deutsches-theater.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
