import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_waterlandvanfriesland.nl_6uk', ['https://www.waterlandvanfriesland.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
