import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl-nl.bakker.com_42l', ['https://nl-nl.bakker.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
