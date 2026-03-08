import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bestattungen-jakobi.gemeinsam-trauern.net_j2x', ['https://bestattungen-jakobi.gemeinsam-trauern.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
