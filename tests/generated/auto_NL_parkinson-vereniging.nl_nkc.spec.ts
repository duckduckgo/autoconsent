import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_parkinson-vereniging.nl_nkc', ['https://www.parkinson-vereniging.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
