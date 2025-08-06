import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksversand.de_kfn', ['https://volksversand.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
