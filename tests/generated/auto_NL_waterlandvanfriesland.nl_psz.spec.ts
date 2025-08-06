import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_waterlandvanfriesland.nl_psz', ['https://www.waterlandvanfriesland.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
