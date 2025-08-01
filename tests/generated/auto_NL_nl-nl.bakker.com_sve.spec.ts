import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl-nl.bakker.com_sve', ['https://nl-nl.bakker.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
