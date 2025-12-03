import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uit.inapeldoorn.nl_gt5', ['https://uit.inapeldoorn.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
