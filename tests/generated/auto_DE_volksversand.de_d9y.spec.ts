import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksversand.de_d9y', ['https://volksversand.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
