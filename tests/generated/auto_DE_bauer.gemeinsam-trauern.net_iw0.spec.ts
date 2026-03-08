import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bauer.gemeinsam-trauern.net_iw0', ['https://bauer.gemeinsam-trauern.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
