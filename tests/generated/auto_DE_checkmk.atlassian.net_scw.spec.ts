import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_checkmk.atlassian.net_scw', ['https://checkmk.atlassian.net/wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
