import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_waterlandvanfriesland.nl_0g8', ['https://www.waterlandvanfriesland.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
