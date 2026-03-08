import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dartmann.gemeinsam-trauern.net_8r4', ['https://dartmann.gemeinsam-trauern.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
