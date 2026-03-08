import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_appfire.atlassian.net_dg2', ['https://appfire.atlassian.net/wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
