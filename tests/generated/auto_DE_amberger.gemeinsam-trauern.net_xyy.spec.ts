import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_amberger.gemeinsam-trauern.net_xyy', ['https://amberger.gemeinsam-trauern.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
