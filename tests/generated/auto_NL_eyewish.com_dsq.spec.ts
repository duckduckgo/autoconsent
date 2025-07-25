import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eyewish.com_dsq', ['https://www.eyewish.com/nl-nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
