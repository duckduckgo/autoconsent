import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bestattungen-gronau.gemeinsam-trauern.net_30t', ['https://bestattungen-gronau.gemeinsam-trauern.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
