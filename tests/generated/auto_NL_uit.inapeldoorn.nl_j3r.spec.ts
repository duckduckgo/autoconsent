import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uit.inapeldoorn.nl_j3r', ['https://uit.inapeldoorn.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
